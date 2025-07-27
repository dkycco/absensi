const db = require('../../config/database');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    }
};

module.exports = User;