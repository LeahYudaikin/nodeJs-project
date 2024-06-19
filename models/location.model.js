const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    id: Number,
    location_name: String
})

const location = mongoose.model('locations', locationSchema);

module.exports = location;