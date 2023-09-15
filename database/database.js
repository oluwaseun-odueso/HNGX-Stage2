const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = process.env.SQ_DATABASE;
const user = process.env.SQ_USER;
const password = process.env.SQ_PASSWORD;
const host = process.env.HOST

if (!database || !user || !password || !host) {
    throw new Error('Missing required environment variables for database connection');
};

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'postgres'
  });

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.log('Unable to connect to the database:', error));

module.exports = sequelize;