const Service = require('./Service.js');
const volunteerRepo = require('../repositories/VolunteerRepo.js');

class VolunteerService extends Service {
    constructor() {
        super(volunteerRepo);
    }
}

module.exports = new VolunteerService();