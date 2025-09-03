const DataSiswa = require('../models/DataSiswa');
const LogAbsensi = require('../models/AbsensiSekolah');
const { Op } = require('sequelize');

module.exports = {
   index: async (req, res) => {
      try {
         const dataSiswa = await DataSiswa.findAll();
         const logAbsensi = await LogAbsensi.findAll();
         const totalDataSiswa = await DataSiswa.count();

         const today = new Date();
         today.setHours(0, 0, 0, 0);
         const tomorrow = new Date(today);
         tomorrow.setDate(today.getDate() + 1);

         const siswaSudahAbsen = await LogAbsensi.count({
            distinct: true,
            col: 'id',
            where: {
               createdAt: {
                  [Op.gte]: today,
                  [Op.lt]: tomorrow
               }
            }
         });

         const totalAbsen = totalDataSiswa - siswaSudahAbsen;

         res.render('pages/dashboard', {
            layout: 'layouts/main-layout',
            title: 'Dashboard | SMK KORPRI SUMEDANG',
            controller: 'dashboard.index',
            totalDataSiswa,
            totalAbsen
         });
      } catch (err) {
         res.status(500).send('Terjadi kesalahan saat memuat halaman.');
      }
   }
}