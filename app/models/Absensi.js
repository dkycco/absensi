const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Absensi = sequelize.define('Absensi', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'absensi',
    timestamps: false
});

module.exports = Absensi;