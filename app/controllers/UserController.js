const User = require('../models/User');

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