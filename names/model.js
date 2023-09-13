const { DataTypes } = require('sequelize');
const connection = require('../database/database')

const Name = connection.define('Client', {
   name: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
})
module.exports = Name