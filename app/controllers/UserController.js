const User = require('../models/user');

module.exports = {
    index: async(req, res) => {
        const users = await User.findAll();
        res.render('pages/index', { users, title: 'Daftar Pengguna' });
    }
};