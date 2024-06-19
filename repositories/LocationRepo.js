const Repository = require('./Repository.js');
const Location = require('../models/location.model.js');

class LocationRepo extends Repository {
    constructor(){
        super(Location);
    }
}

module.exports = new LocationRepo();