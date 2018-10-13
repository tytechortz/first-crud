const mongoose = require('mongoose');
const connectionString = 'mongodb://localhose/commie';

mongoose.connect(connectionString, { useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongooser error: ', err);
});