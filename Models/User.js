// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Utils/database');

const User = sequelize.define('User', {
  // Define columns
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Additional options (optional)
  timestamps: true,
});

module.exports = User;
