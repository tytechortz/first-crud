// this is the data, or model
const mongoose = require('mongoose');

const bicycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    genre: {type: String, required: true},
    year: Number,
});

module.exports = mongoose.model('Album', albumSchema);