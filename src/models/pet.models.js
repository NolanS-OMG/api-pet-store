const { DataTypes } = require('sequelize');

const sequelize = require('./db.models.js');

const Pet = sequelize.define(
  "Pet",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: "pet"
  }
);

module.exports = Pet;