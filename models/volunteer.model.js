const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    phone: String,
    specialization: String
})

const volunteer = mongoose.model('volunteers', volunteerSchema);

module.exports = volunteer;