const mongoose = require('mongoose');

const prioritySchema = new mongoose.Schema({
    id: Number,
    priority_name: String
})

const priority = mongoose.model('priorities', prioritySchema);

module.exports = priority;