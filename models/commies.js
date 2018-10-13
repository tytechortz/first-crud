// this is the data, or model
const mongoose = require('mongoose');

const commieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    nation: {type: String, required: true}
})

module.exports = mongoose.model('Commie', commieSchema);