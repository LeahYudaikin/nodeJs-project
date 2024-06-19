const mongoose = require('mongoose');

const helpRequestSchema = new mongoose.Schema({
    id: Number,
    location: Number,
    problem: String,
    phone: String,
    status: String,
    numOfPeople: Number,
    priority: Number,
    volunteer: Number
})

const helpRequest = mongoose.model('help_requests', helpRequestSchema);

module.exports = helpRequest;