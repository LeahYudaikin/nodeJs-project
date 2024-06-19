const Repository = require('./Repository.js');
const Priority = require('../models/priority.model.js');

class PriorityRepo extends Repository {
    constructor(){
        super(Priority);
    }
}

module.exports = new PriorityRepo();