'use strict';

const { faker } = require('@faker-js/faker');
const DataSiswa = require('../../app/models/DataSiswa');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const siswa = await DataSiswa.findAll({ attributes: ['nisn'] });
    const nisnList = siswa.map(s => s.nisn);

    const data = [];

    for (let i = 0; i < 121; i++) {
      const nisn = faker.helpers.arrayElement(nisnList);
      const statusSiswa = faker.helpers.arrayElement(['hadir', 'pulang']);
      const statusPesan = faker.helpers.arrayElement(['pending', 'terkirim', 'gagal']);
      const pesan = faker.lorem.sentence();

      data.push({
        nisn,
        status_siswa: statusSiswa,
        status_pesan: statusPesan,
        pesan,
        created_at: faker.date.recent(7),
        updated_at: new Date()
      });
    }

    await queryInterface.bulkInsert('absensi_sekolah', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('absensi_sekolah', null, {});
  }
};
