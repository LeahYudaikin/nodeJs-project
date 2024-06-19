const Controller = require('./Controller.js');
const locationService = require('../services/LocationService.js');

class LocationController extends Controller{
    constructor(){
        super(locationService);
    }
}

module.exports = new LocationController();