require('dotenv').config();
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
        timezone: '+07:00',
        dialectOptions: {
            timezone: 'Etc/GMT-7',
        },
    }
);

sequelize.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(err => console.error('Database error:', err));

module.exports = sequelize;