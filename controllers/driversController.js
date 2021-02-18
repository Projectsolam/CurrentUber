const Driver = require('../models/driver.js')
const { Op } = require("sequelize");
​
const create = async(driver) => {
    // create a new trip
    const savedDriver = await Driver.create(driver);
    console.log("savedDriver's auto-generate ID:", savedDriver.Id)
    return savedDriver
}


const index = async(location) => {
    const select = {}
    if (location) select.where = { 
        longitude: { [Op.gt]: location.longitude },
        latitude: { [Op.gt]: location.latitude },
    }
    const drivers = await Driver.findAll(select);
    return drivers
}
​
const update = async(driver) => {
    const updatedDriver = await Driver.update(driver, {
        where: {
          id: driver.id
        }
      });
    // const savedDriver = await Driver.create(Driver);
    console.log("updatedDriver", updatedDriver)
    return updatedDriver
}
module.exports = {
    create,
    index,
    update}
    