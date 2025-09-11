'use strict';

const { faker } = require('@faker-js/faker');
const DataSiswa = require('../../app/models/DataSiswa');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const siswa = await DataSiswa.findAll({ attributes: ['nisn'] });
    const nisnList = siswa.map(s => s.nisn);

    const data = [];

    for (let i = 0; i < 500; i++) {
      const nisn = faker.helpers.arrayElement(nisnList);
      const statusSiswa = faker.helpers.arrayElement(['hadir', 'pulang']);
      const statusPesan = faker.helpers.arrayElement(['pending', 'terkirim', 'gagal']);
      const pesan = faker.lorem.sentence();
      const randomDate2025 = faker.date.between({
        from: new Date('2025-01-01T00:00:00Z'),
        to: new Date('2025-12-31T23:59:59Z')
      });

      data.push({
        nisn,
        status_siswa: statusSiswa,
        status_pesan: statusPesan,
        pesan,
        created_at: randomDate2025,
        updated_at: randomDate2025
      });
    }

    await queryInterface.bulkInsert('absensi_sekolah', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('absensi_sekolah', null, {});
  }
};
