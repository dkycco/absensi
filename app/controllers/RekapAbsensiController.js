const { Op } = require('sequelize');
const AbsensiSekolah = require('../models/AbsensiSekolah');
const DataSiswa = require('../models/DataSiswa');

function getWeekdaysInMonth(year, month) {
  const dates = [];
  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    const day = date.getDay();
    if (day >= 1 && day <= 5) {
      dates.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }
  return dates;
}

module.exports = {
  index: async (req, res) => {
    res.render('pages/rekap_absensi', {
      layout: 'layouts/main-layout',
      title: 'Rekap Absensi Sekolah | SMK KORPRI SUMEDANG',
      controller: 'rekap_absensi.index',
      dataRekap: {},
      absenLogs: [],
      weekdays: [],
      kelasKeys: []
    });
  },

  getData: async (req, res) => {
    try {
      const { periode } = req.params;
      let year, month;

      if (periode) {
        const [m, y] = periode.split('-');
        month = parseInt(m, 10) - 1;
        year = parseInt(y, 10);
      } else {
        const today = new Date();
        year = today.getFullYear();
        month = today.getMonth();
      }

      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0, 23, 59, 59);

      const semuaSiswa = await DataSiswa.findAll({
        attributes: ['nisn', 'nama_lengkap', 'kelas'],
        order: [['kelas', 'ASC'], ['nama_lengkap', 'ASC']]
      });

      const dataAbsensi = await AbsensiSekolah.findAll({
        include: [{
          model: DataSiswa,
          as: 'siswa',
          attributes: ['nisn', 'nama_lengkap', 'kelas']
        }],
        where: {
          created_at: { [Op.between]: [startDate, endDate] }
        },
        order: [['created_at', 'ASC']]
      });

      const absensiByNisn = {};
      dataAbsensi.forEach(absen => {
        if (!absensiByNisn[absen.siswa.nisn]) absensiByNisn[absen.siswa.nisn] = [];
        absensiByNisn[absen.siswa.nisn].push(absen.toJSON());
      });

      const groupedByKelas = {};
      semuaSiswa.forEach(siswa => {
        const kelas = siswa.kelas || 'Tidak ada kelas';
        if (!groupedByKelas[kelas]) groupedByKelas[kelas] = [];

        groupedByKelas[kelas].push({
          siswa: siswa.toJSON(),
          absensi: absensiByNisn[siswa.nisn] || []
        });
      });

      const kelasKeys = Object.keys(groupedByKelas).sort((a, b) => {
        const A = a.toLowerCase();
        const B = b.toLowerCase();

        const order = ['x_', 'xi_', 'xii_'];
        const getOrder = k => {
          const idx = order.findIndex(prefix => k.startsWith(prefix));
          return idx === -1 ? order.length : idx;
        };

        const orderA = getOrder(A);
        const orderB = getOrder(B);

        if (orderA !== orderB) return orderA - orderB;
        return A.localeCompare(B);
      });

      const weekdays = getWeekdaysInMonth(year, month);

      return res.json({
        success: true,
        dataRekap: groupedByKelas,
        kelasKeys,
        weekdays,
        periode
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Gagal mengambil data absensi' });
    }
  }
};
