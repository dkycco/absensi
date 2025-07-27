const User = require('../models/user');

module.exports = {
    index: (req, res) => {
        User.getAll((err, users) => {
            if (err) throw err;
            res.render('pages/index', {
                title: 'Daftar Pengguna',
                users
            });
        });
    }
};