const {  DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Driver = sequelize.define('Driver', {
  // Model attributes are defined here
  driverLicenseNumber: {
    type: DataTypes.STRING,
     // allowNull defaults to true
  },
  userID: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  carLicensePlateNumber: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  latitude: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  longitude: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  carMakeAndModel: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
},
hasDrivenManyRiders: {
  type: DataTypes.BOOLEAN
  // allowNull defaults to true
},
}, {
  sequelize,
    modelName: 'Driver'
});
Driver.sync({  force: true })
// `sequelize.define` also returns the model
console.log(Driver === sequelize.models.Driver); // true

module.exports = Driver