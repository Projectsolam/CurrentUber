const User = require('../models/user.js')

async function create(user) {
    // Create a new user
    const newUser = await User.create(user);
    console.log("user:")
    return newUser
}
async function index() {

    const users = await User.findAll({});
    console.log("users:")
    return users
}
module.exports = {
    create,
    index
}