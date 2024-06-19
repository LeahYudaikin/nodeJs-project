const Service = require('./Service.js');
const priorityRepo = require('../repositories/PriorityRepo.js');

class PriorityService extends Service {
    constructor() {
        super(priorityRepo);
    }
}

module.exports = new PriorityService();