const sequelize = require('./database');
const User = require('../Models/User');

const syncDatabase = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.error('Failed to sync database:', error);
  }
};

module.exports = syncDatabase;