const DataSiswa = require('../models/DataSiswa');
const {
  Op
} = require('sequelize');
const dayjs = require('dayjs');
const {
  index
} = require('./LogAbsensiController');

module.exports = {
  index: async (req, res) => {
    const data_siswa = await DataSiswa.findAll();

    res.render('pages/data_siswa', {
      layout: 'layouts/main-layout',
      currentController: 'data_siswa.index'
    });
  },

  create: async (req, res) => {
    res.render('pages/form_data_siswa', {
      layout: false
    });
  }
};