'use strict';

const dayjs = require('dayjs');
const bcrypt = require('bcryptjs');

module.exports = {
   up: async (queryInterface, Sequelize) => {
      const password = await bcrypt.hash('dikicyber@', 10);
      const password2 = await bcrypt.hash('20208395', 10);
      await queryInterface.bulkInsert('users', [{
            nama_lengkap: 'Diki Muhamad Alfikri',
            username: 'dkycco',
            role: 'webmaster',
            password: password,
            created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
         },{
            nama_lengkap: 'Admin',
            username: 'admin',
            role: 'admin',
            password: password2,
            created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            updated_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
         }
      ]);
   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
   }
};