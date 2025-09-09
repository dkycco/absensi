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
      try {
         const dataRekap = await AbsensiSekolah.findAll({
            include: [{
               model: DataSiswa,
               as: 'siswa',
               attributes: ['nisn', 'nama_lengkap', 'kelas']
            }],
            order: [['created_at', 'ASC']]
         });

         const groupedByKelas = {};
         dataRekap.forEach(absen => {
            const kelas = absen.siswa?.kelas || 'Tidak ada kelas';
            if (!groupedByKelas[kelas]) groupedByKelas[kelas] = [];
            if (!groupedByKelas[kelas].some(s => s.siswa.nisn === absen.siswa.nisn)) {
               groupedByKelas[kelas].push(absen);
            }
         });

         const absenLogs = dataRekap.map(a => a.toJSON());

         const today = new Date();
         const weekdays = getWeekdaysInMonth(today.getFullYear(), today.getMonth());

         res.render('pages/rekap_absensi', {
            layout: 'layouts/main-layout',
            title: 'Rekap Absensi Sekolah | SMK KORPRI SUMEDANG',
            controller: 'rekap_absensi.index',
            dataRekap: groupedByKelas,
            absenLogs,
            weekdays
         });
      } catch (error) {
         console.error(error);
         res.status(500).send('Terjadi kesalahan saat mengambil data absensi');
      }
   }
};
