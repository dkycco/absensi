const Absensi = require('../models/Absensi');

module.exports = {
    index: async(req, res) => {
        const users = await Absensi.findAll();
        res.render('pages/index', { users, title: 'Daftar Pengguna' });
    }
};