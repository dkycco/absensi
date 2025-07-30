const DataSiswa = require('../models/DataSiswa');
const LogAbsensi = require('../models/LogAbsensi');
const whatsappClient = require('../../services/whatsapp');
const {
  Op
} = require('sequelize');
const dayjs = require('dayjs');
const todayStart = now.startOf('day').toDate();
const todayEnd = now.endOf('day').toDate();


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
      //   res.status(500).json({ error: 'Gagal memuat data absensi!' });
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
        // return res.status(400).json({ error: 'NISN wajib diisi' });
      }

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
        const diffInMinutes = dayjs().diff(dayjs(existing.created_at), 'minute');

        if (diffInMinutes < 60) {
          io.emit('absensi:toast', {
            message: `Siswa sudah absen kurang dari 1 jam yang lalu!`,
            type: 'warning'
          });
          return res.status(409).json({
            error: 'Sudah absen'
          });
        }

        status_siswa = 'pulang';
      }

      const siswa = await DataSiswa.findOne({
        where: {
          nisn
        }
      });

      io.emit('absensi:baru', {
        nisn: created.nisn,
        siswa,
        waktu: created.created_at
      });

      io.emit('absensi:toast', {
        message: `Absensi berhasil disimpan untuk NISN ${nisn}`,
        type: 'success'
      });

      res.status(201).json({
        nisn: created.nisn,
        
        waktu: created.created_at,
        siswa
      });

      if (siswa?.no_hp) {
        const phone = siswa.no_hp.replace(/[^0-9]/g, '') + '@c.us';

        const message = `📋 Absensi baru:\nNama: ${siswa.nama_lengkap}\nKelas: ${siswa.kelas}\nStatus: Hadir`;

        whatsappClient.sendMessage(phone, message).then(() => {
          console.log('Notifikasi WhatsApp dikirim ke', phone);
        }).catch(err => {
          console.error('Gagal kirim WA:', err.message);
        });
      }

    } catch (err) {
      console.error(err);
      io.emit('absensi:toast', {
        message: 'Gagal menyimpan absensi!',
        type: 'danger'
      });
      //   res.status(500).json({ error: 'Gagal menyimpan absensi!' });
    }
  }
};