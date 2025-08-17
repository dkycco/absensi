module.exports = {
   index: async (req, res) => {
      res.render('pages/rekap_absensi', {
         layout: 'layouts/main-layout',
         title: 'Rekap Absensi | SMK KORPRI SUMEDANG',
         controller: 'rekap_absensi.index',
      });
   }
}