const {  DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Review = sequelize.define('Review', {
  // Model attributes are defined here
 
  isDriver: {
    type: DataTypes.BOOLEAN
    // allowNull defaults to true
  },
  rideID: {
    type: DataTypes.INTERGER
    // allowNull defaults to true
  },
  star: {
    type: DataTypes.INTERGER
    // allowNull defaults to true
  },
}, {
  sequelize,
    modelName: 'Review'
});
Review.sync({  force: true })
// `sequelize.define` also returns the model
console.log(Review === sequelize.models.Review); // true

module.exports = Review