const Controller = require('./Controller.js');
const volunteerService = require('../services/VolunteerService.js');

class VolunteerController extends Controller{
    constructor(){
        super(volunteerService);
    }
}

module.exports = new VolunteerController();