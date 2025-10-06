const DataSiswa = require('../models/DataSiswa');
const AbsensiSekolah = require('../models/AbsensiSekolah');
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

function textFormating(str) {
   const lines = str.split('\n');
   const trimmedLines = lines.map(line => line.trimStart());
   return trimmedLines.join('\n').trim();
}

module.exports = {
   index: async (req, res) => {
      try {
         const dataSiswa = await DataSiswa.findAll();
         const dataAbsensiSekolah = await AbsensiSekolah.findAll({
            where: {
               created_at: {
                  [Op.between]: [todayStart, todayEnd]
               }
            },
            include: {
               model: DataSiswa,
               as: 'siswa'
            },
            order: [
               ['created_at', 'DESC']
            ]
         });

         res.render('pages/absensi_sekolah', {
            layout: 'layouts/main-layout',
            title: 'Absensi Sekolah | SMK KORPRI SUMEDANG',
            controller: 'absensi_sekolah.index',
            dataAbsensiSekolah,
            dataSiswa
         });
      } catch (error) {
         res.status(500).send('Terjadi kesalahan saat memuat halaman.');
      }
   },

   create: async (req, res) => {

      try {
         const dataSiswa = await DataSiswa.findAll();

         res.render('pages/form_absensi_sekolah', {
            layout: false,
            title: false,
            is_create: true,
            dataSiswa
         })
      } catch (error) {
         res.status(500).send('Terjadi kesalahan saat memuat halaman.');
      }
   },

   findNISN: async (req, res) => {
      const {
         nisn
      } = req.params;

      try {
         const siswa = await DataSiswa.findOne({
            where: {
               nisn
            }
         });

         if (!siswa) {
            return res.status(404).json({
               message: 'Siswa tidak ditemukan'
            });
         }

         return res.status(200).json(siswa);
      } catch (error) {
         return res.status(500).send(error);
      }
   },

   store: async (req, res) => {
      const io = req.app.get('io');
      let { cari_nisn, status_siswa } = req.body;

      try {
         if (typeof cari_nisn === 'string') {
            cari_nisn = JSON.parse(cari_nisn);
         }
      } catch (e) {
         return res.status(400).json({
            message: 'Format data siswa tidak valid!',
            type: 'warning'
         });
      }

      if (!cari_nisn || !Array.isArray(cari_nisn) || cari_nisn.length === 0) {
         return res.status(400).json({
            message: 'Pilih minimal satu siswa!',
            type: 'warning'
         });
      }

      if (!status_siswa) {
         return res.status(400).json({
            message: 'Status Siswa wajib dipilih!',
            type: 'warning'
         });
      }

      try {
         const results = [];
         const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
         for (const nisn of cari_nisn) {
            const siswa = await DataSiswa.findOne({ where: { nisn } });
            if (!siswa) continue;

            const existing = await AbsensiSekolah.findOne({
               where: {
                  nisn,
                  status_siswa,
                  created_at: { [Op.between]: [todayStart, todayEnd] }
               }
            });
            if (existing) continue;

            const waktu = new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit',hour12:true});
            const tanggal = new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});

            let pesan = '';

            if (status_siswa === 'hadir') {
               pesan = textFormating(`
                  Yth. ${siswa.nama_orangtua_wali} Bapak/Ibu Orang Tua/Wali Murid

                  Dengan ini kami beritahukan bahwa ananda:

                  Nama  : ${siswa.nama_lengkap}
                  Kelas : ${siswa.kelas.replace(/_/g, ' ').toUpperCase()}
                  NISN  : ${nisn}

                  Telah tercatat *hadir* di sekolah secara sistem pada pukul: *${waktu}*, tanggal: *${tanggal}*.

                  *_*Pesan ini terkirim secara otomatis oleh sistem, dimohon untuk tidak membalas pesan ini!_*
               `)
            } else if (status_siswa === 'pulang') {
               pesan = textFormating(`
                  Yth. ${siswa.nama_orangtua_wali} Bapak/Ibu Orang Tua/Wali Murid
                  
                  Dengan ini kami beritahukan bahwa ananda:

                  Nama  : ${siswa.nama_lengkap}
                  Kelas : ${siswa.kelas.replace(/_/g, ' ').toUpperCase()}
                  NISN  : ${nisn}

                  Telah tercatat *pulang* dari sekolah secara sistem pada pukul: *${waktu}*, tanggal *${tanggal}*.

                  Kami menghimbau kepada Bapak/Ibu/Wali untuk dapat memastikan siswa telah tiba di rumah dengan selamat. Apabila ada kendala dalam perjalanan, dimohon untuk segera menghubungi pihak sekolah.

                  *_*Pesan ini terkirim secara otomatis oleh sistem, dimohon untuk tidak membalas pesan ini!_*
               `)
            }

            const created = await AbsensiSekolah.create({
               nisn,
               status_siswa,
               status_pesan: 'pending',
               pesan
            });

            try {
               await axios.post("http://192.168.1.4:4000/api/whatsapp", {
                  api_key: process.env.WHATSAPP_API_KEY,
                  no_hp: siswa.no_hp,
                  pesan
               }, { headers: { "Content-Type": "application/json" } });

               await created.update({ status_pesan: "terkirim" });
            } catch (err) {
               await created.update({ status_pesan: "gagal" });
               console.log(err);
            }

            io.emit('log-absensi:baru', {
               id: created.id,
               id_sidik_jari: siswa.id_sidik_jari,
               nama_lengkap: siswa.nama_lengkap,
               kelas: siswa.kelas,
               waktu,
               status_siswa,
               status_pesan: created.status_pesan
            });

            results.push(created);
            await sleep(2000);
         }

         io.emit('push:toast', {
            message: `Absensi berhasil disimpan untuk ${results.length} siswa`,
            type: 'success'
         });

         return res.status(200).json({ created: results });
      } catch (error) {
         console.log(error);
         return res.status(500).json({
            message: 'Terjadi kesalahan saat menyimpan data!',
            type: 'danger'
         });
      }
   },

   viewData: async (req, res) => {
      const {
         id
      } = req.params;
      const dataSiswa = await AbsensiSekolah.findOne({
         where: {
            id
         },
         include: {
            model: DataSiswa,
            as: 'siswa'
         }
      });

      try {
         // res.render('pages/form_absensi_sekolah', {
         //    layout: false,
         //    title: false,
         //    is_create: false,
         //    dataSiswa
         // })
      } catch (error) {

      }
   }
}