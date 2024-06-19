const Repository = require('./Repository.js');
const HelpRequest = require('../models/helpRequest.model.js');

class HelpRequestRepo extends Repository {
    constructor(){
        super(HelpRequest);
    }
}

module.exports = new HelpRequestRepo();