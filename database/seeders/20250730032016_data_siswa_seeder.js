'use strict';

const dayjs = require('dayjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('data_siswa', [{
        id_sidik_jari: '0',
        nisn: '0098765432',
        nama_lengkap: 'Diki Muhamad Alfikri',
        kelas: 'XII RPL',
        nama_orangtua_wali: 'Nana',
        no_hp: '6281395564815',
        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('data_siswa', null, {});
  }
};