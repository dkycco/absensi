const AbsensiSekolah = require('../models/AbsensiSekolah');
const DataSiswa = require('../models/DataSiswa');
const APIKey = require('../models/APIKey');
const { Op } = require('sequelize');
const axios = require('axios')

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const now = dayjs().tz('Asia/Jakarta');
const todayStart = now.startOf('day').toDate();
const todayEnd = now.endOf('day').toDate();

module.exports = {
   store: async (req, res) => {
      const io = req.app.get('io');
      const {
         api_key,
         status_siswa,
         id_sidik_jari
      } = req.body;
      const dataSiswa = await DataSiswa.findOne({
         where: {
            id_sidik_jari
         }
      });

      function textFormating(str) {
         const lines = str.split('\n');
         const trimmedLines = lines.map(line => line.trimStart());
         return trimmedLines.join('\n').trim();
      }

      try {

         if (!api_key || !status_siswa || !id_sidik_jari) {
            return res.status(400).json({
               message: 'api_key, status_siswa, dan id_sidik_jari wajib diisi'
            });
         }

         const apiKeyData = await APIKey.findOne({
            where: {
               api_key,
               status: 'active'
            }
         });

         if (!apiKeyData) {
            return res.status(403).json({
               message: 'API Key tidak valid atau tidak aktif'
            });
         }

         if (!['hadir', 'pulang'].includes(status_siswa)) {
            return res.status(400).json({
               message: 'Status hanya boleh "hadir" atau "pulang"'
            });
         }

         const existing = await AbsensiSekolah.findOne({
            where: {
               nisn: dataSiswa.nisn,
               status_siswa,
               created_at: {
                  [Op.between]: [todayStart, todayEnd]
               }
            },
            order: [
               ['created_at', 'DESC']
            ]
         });

         if (existing) {
            return res.status(409).json({
               message: 'Siswa sudah absen hari ini!',
               type: 'warning'
            });
         }

         const waktu = new Date().toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
         });

         const tanggal = new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
         })

         let pesan = '';

         if (status_siswa === 'hadir') {
            pesan = textFormating(`
                    Yth. ${dataSiswa.nama_orangtua_wali} Bapak/Ibu Orang Tua/Wali Murid

                    Dengan ini kami beritahukan bahwa ananda:

                    Nama   : ${dataSiswa.nama_lengkap}
                    Kelas  : ${dataSiswa.kelas.replace(/_/g, ' ').toUpperCase()}
                    NISN   : ${dataSiswa.nisn}

                    Telah tercatat *hadir* di sekolah secara sistem pada pukul: *${waktu}*, tanggal: *${tanggal}*.

                    *_*Pesan ini terkirim secara otomatis oleh sistem, dimohon untuk tidak membalas pesan ini!_*
                `)
         } else if (status_siswa === 'pulang') {
            pesan = textFormating(`
                    Yth. ${dataSiswa.nama_orangtua_wali} Bapak/Ibu Orang Tua/Wali Murid
                    
                    Dengan ini kami beritahukan bahwa ananda:

                    Nama   : ${dataSiswa.nama_lengkap}
                    Kelas  : ${dataSiswa.kelas.replace(/_/g, ' ').toUpperCase()}
                    NISN   : ${dataSiswa.nisn}

                    Telah tercatat *pulang* dari sekolah secara sistem pada pukul: *${waktu}*, tanggal *${tanggal}*.

                    Kami menghimbau kepada Bapak/Ibu/Wali untuk dapat memastikan siswa telah tiba di rumah dengan selamat. Apabila ada kendala dalam perjalanan, dimohon untuk segera menghubungi pihak sekolah.

                    *_*Pesan ini terkirim secara otomatis oleh sistem, dimohon untuk tidak membalas pesan ini!_*
                `)
         }

         const log = await AbsensiSekolah.create({
            nisn: dataSiswa.nisn,
            status_siswa: status_siswa,
            status_pesan: 'pending',
            pesan
         });

         try {
            await axios.post("http://192.168.1.4:4000/api/whatsapp", {
               api_key: process.env.WHATSAPP_API_KEY,
               no_hp: dataSiswa.no_hp,
               pesan
            }, {
               headers: {
                  "Content-Type": "application/json"
               }
            });

            await log.update({ status_pesan: "terkirim" });
         } catch (err) {
            console.log(err);
            await log.update({ status_pesan: "gagal" });
         }

         io.emit('log-absensi:baru', {
            id: log.id,
            id_sidik_jari: dataSiswa.id_sidik_jari,
            nama_lengkap: dataSiswa.nama_lengkap,
            kelas: dataSiswa.kelas,
            waktu,
            status_siswa,
            status_pesan: log.status_pesan
         });

         io.emit('push:toast', {
            message: `Absensi berhasil disimpan dengan nama ${dataSiswa.nama_lengkap}`,
            type: 'success'
         });

         return res.status(201).json({
            message: 'Log absensi berhasil ditambahkan',
            nama_lengkap: dataSiswa.nama_lengkap
         });

      } catch (error) {
         return res.status(500).json({
            message: 'Terjadi kesalahan pada server'
         });
      }
   }
};