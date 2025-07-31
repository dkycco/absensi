const DataSiswa = require('../models/DataSiswa');
const LogAbsensi = require('../models/LogAbsensi');
const {
  Op
} = require('sequelize');
const dayjs = require('dayjs');

module.exports = {
  index: async (req, res) => {
    try {
      const siswa_list = await DataSiswa.findAll();
      const log_absensi = await LogAbsensi.findAll({
        include: {
          model: DataSiswa,
          as: 'siswa'
        },
        order: [
          ['created_at', 'DESC']
        ]
      });

      res.render('pages/log_absensi', {
        currentController: 'log_absensi.index',
        siswa_list,
        log_absensi
      });
    } catch (err) {
      console.error(err);
      const io = req.app.get('io');
      io.emit('absensi:toast', {
        message: 'Gagal memuat data absensi!',
        type: 'danger'
      });
    }
  },

  store: async (req, res) => {
    const {
      nisn
    } = req.body;
    const io = req.app.get('io');

    try {
      if (!nisn) {
        io.emit('absensi:toast', {
          message: 'NISN wajib diisi!',
          type: 'warning'
        });
        return res.status(400).json({
          error: 'NISN wajib diisi'
        });
      }

      const now = dayjs();
      const todayStart = now.startOf('day').toDate();
      const todayEnd = now.endOf('day').toDate();

      const existing = await LogAbsensi.findOne({
        where: {
          nisn,
          created_at: {
            [Op.between]: [todayStart, todayEnd]
          }
        },
        order: [
          ['created_at', 'DESC']
        ]
      });

      let status_siswa = 'hadir';

      if (existing) {
        const diffInMinutes = now.diff(dayjs(existing.created_at), 'minute');

        if (diffInMinutes < 60) {
          // ⛔ TOLAK absensi
          io.emit('absensi:toast', {
            message: 'Siswa sudah absen kurang dari 1 jam yang lalu!',
            type: 'warning'
          });
          return res.status(409).json({
            error: 'Sudah absen hari ini'
          });
        }

        // ✅ LANJUTKAN, tapi status jadi "pulang"
        status_siswa = 'pulang';
      }

      // Ambil data siswa
      const siswa = await DataSiswa.findOne({
        where: {
          nisn
        }
      });

      // Buat data absensi
      const created = await LogAbsensi.create({
        nisn,
        status_siswa,
        status_pesan: 'pending',
        pesan: '-'
      });

      // Emit update ke semua client
      io.emit('absensi:baru', {
        nisn: created.nisn,
        siswa,
        waktu: created.created_at
      });

      io.emit('absensi:toast', {
        message: `Absensi berhasil disimpan untuk NISN ${nisn}`,
        type: 'success'
      });

      // Kirim pesan WhatsApp
      // if (siswa?.no_hp) {
      //   const phone = siswa.no_hp.replace(/[^0-9]/g, '') + '@c.us';
      //   const message = `📋 Absensi: ${status_siswa.toUpperCase()}\nNama: ${siswa.nama_lengkap}\nKelas: ${siswa.kelas}\nWaktu: ${dayjs(created.created_at).format('HH:mm')}`;

      //   try {
      //     await whatsappClient.sendMessage(phone, message);
      //     await created.update({ status_pesan: 'terkirim' });
      //   } catch (err) {
      //     await created.update({ status_pesan: 'gagal' });
      //   }
      // }

      // Kirim respons akhir
      res.status(201).json({
        nisn: created.nisn,
        waktu: created.created_at,
        status_siswa,
        status_pesan: created.status_pesan,
        siswa
      });

    } catch (err) {
      console.error(err);
      io.emit('absensi:toast', {
        message: 'Gagal menyimpan absensi!',
        type: 'warning'
      });
      res.status(500).json({
        error: 'Terjadi kesalahan server'
      });
    }
  }
};