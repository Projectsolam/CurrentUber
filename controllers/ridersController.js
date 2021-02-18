const Trip = require('../models/trip.js')
const Driver = require('../models/trip.js')
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
const index = async(riderID) => {
    const select = {}
    if (riderID) select.where = { 
        riderID: riderID 
    }
    const trips = await Trip.findAll({
        include: {
          model: Driver
        //   where: select
        }
    }).catch((error) => {return error})
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
​
module.exports = {
    create,
    index,
    update,
    show,
    cancel
}