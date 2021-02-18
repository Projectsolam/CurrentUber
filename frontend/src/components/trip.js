const Trip = require('../models/trip.js')
const Driver = require('../models/trip.js')
const driversController = require('./driversController.js')
​
const create = async(trip) => {
    // create a new trip
    const savedTrip = await Trip.create(trip);
    console.log("savedTrip's auto-generate ID:", savedTrip.Id)
    return savedTrip
}
​
const update = async(trip) => {
    const updatedTrip = await Trip.update(trip, {
        where: {
          id: trip.id
        }
      });
    // const savedTrip = await Trip.create(trip);
    console.log("updatedTrip", updatedTrip)
    return updatedTrip
}
const cancel = async(trip) => {
    const updatedTrip = await Trip.update({ status: 'canceled' }, {
        where: {
          id: trip.id
        }
      });
    // const savedTrip = await Trip.create(trip);
    console.log("updatedTrip", updatedTrip)
    return updatedTrip
}
​
const index = async(where) => {
    const select = {}
    if (where) {
      const key = Object.keys(where)[0]
​
      select.where = {}
      select.where[key] = where[key]
    }
    console.log('select', select)
    const trips = await Trip.findAll(select).catch((error) => {return error})
    // const trips = await Trip.findAll(select);
    // 
    return trips
}
​
const show = async(tripID) => {
    const trip = await Trip.findOne({ where: { id: tripID } });
    return trip
}
​
const pickUp = async(riderName, driverID) => {
  const updatedTrip = await Trip.update({ status: 'pickedUp', driverID }, {
    where: {
      riderName
    }
  });
​
  return driversController.show(driverID) 
}
​
​
module.exports = {
    create,
    index,
    update,
    show,
    cancel,
    pickUp}
