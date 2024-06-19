const Repository = require('./Repository.js');
const Volunteer = require('../models/volunteer.model.js');

class VolunteerRepo extends Repository {
    constructor(){
        super(Volunteer);
    }
}

module.exports = new VolunteerRepo();