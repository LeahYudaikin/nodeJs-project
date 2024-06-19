const Controller = require('./Controller.js');
const priorityService = require('../services/PriorityService.js');

class PriorityController extends Controller{
    constructor(){
        super(priorityService);
    }
}

module.exports = new PriorityController();