const {  DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Rider = sequelize.define('Rider', {
  // Model attributes are defined here
  
  latitude: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  longitude: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  userID: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  
}, {
  sequelize,
    modelName: 'Rider'
});
Rider.sync({  force: true })
// `sequelize.define` also returns the model
console.log(Rider === sequelize.models.Rider); // true
module.exports = Rider