'use strict';

const Hapi = require('@hapi/hapi');
const usersController = require('./controllers/usersController.js');
const driversController = require('./controllers/driversController.js');
const ridersController = require('./controllers/ridersController.js');
const reviewsController = require('./controllers/reviewsController.js');
const tripsController = require('./controllers/tripsController.js');
//const sequelize = require("./db.js")
// const user = require('./models/user.js')
// const usersController = require("/controllers/usersController.js")
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const person = "Emily"
            return 'Hello ' + person + ". You're a rockstar!";
        }
    });

    server.route({
        method: 'GET',
        path: '/users',
        handler: (request, h) => {
            console.log('users get')
            return usersController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/users',
        handler: (request, h) => {
            console.log('hello world')
            const user = request.payload
            return usersController.create(user)
        }
    });
    server.route({
        method: 'GET',
        path: '/drivers/{latitude}/{longitude}',
        handler: (request, h) => {
            const latitude = request.params.latitude;
            const longitude = request.params.longitude;
            let location
            if (latitude || longitude) location = { latitude, longitude }
            return driversController.index(location)
        }
    });
    server.route({
        method: 'GET',
        path: '/drivers',
        handler: (request, h) => {
            return driversController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/drivers',
        handler: (request, h) => {
            const driver = request.payload
            return driversController.create(driver)
        }
    });
    server.route({
        method: 'PUT',
        path: '/drivers',
        handler: (request, h) => {
            const driver = request.payload
            return driversController.update(driver)
        }
    });
    server.route({
        method: 'GET',
        path: '/reviews',
        handler: (request, h) => {
            return reviewsController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/reviews',
        handler: (request, h) => {
            const review = request.payload
            return reviewsController.create(review)
        }
    });
    server.route({
        method: 'GET',
        path: '/riders',
        handler: (request, h) => {
            return ridersController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/riders',
        handler: (request, h) => {
            const rider = JSON.parse(request.payload)
            return ridersController.create(rider)
        }
    });
    server.route({
        method: 'GET',
        path: '/trips',
        handler: (request, h) => {
            return tripsController.index()
        }
    });

    server.route({
        method: 'GET',
        path: '/trips',
        handler: (request, h) => {
            return tripsController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/trips',
        handler: (request, h) => {
            const trip = request.payload
            return tripsController.create(trip)
        }
    });

    server.route({
        method: 'PUT',
        path: '/trips',
        handler: (request, h) => {
            const trip = request.payload
            return tripsController.update(trip)
        }
    });
    server.route({
        method: 'GET',
        path: '/trips/{tripID}',
        handler: (request, h) => {
            const tripID = request.params.tripID;
            return tripsController.show(tripID)
        }
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();