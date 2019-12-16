const mongoose = require('mongoose');
const { DATABASE } = require('../Config');


// ************************  Mongo db connection (start here)
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
const db = mongoose.connect(`mongodb://${DATABASE.HOST}:${DATABASE.PORT}/${DATABASE.DATABASE}`, options)
    .then(() => console.log('db connected'), err => console.log('db not connected', err));
// ************************  Mongo db connection (close here)
module.exports = db;