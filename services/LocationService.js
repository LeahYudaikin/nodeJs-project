const Service = require('./Service.js');
const locationRepo = require('../repositories/LocationRepo.js');

class LocationService extends Service {
    constructor() {
        super(locationRepo);
    }
}

module.exports = new LocationService();