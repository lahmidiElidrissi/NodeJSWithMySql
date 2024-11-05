const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeexmple', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;