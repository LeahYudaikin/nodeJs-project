const Controller = require('./Controller.js');
const helpRequestService = require('../services/HelpRequestService.js');

class HelpRequestController extends Controller{
    constructor(){
        super(helpRequestService);
    }

    async filtering(req, res, next){
        try {
            const result = await helpRequestService.filtering(req.query);
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }

    async IVolunteer(req, res, next){
        try {
            const result = await helpRequestService.IVolunteer(req.query);
            return json(result);
        } catch (e) {
            next(e);
        }
    }

    async NewVolunteer(req, res, next){
        try {
            const result = await helpRequestService.NewVolunteer(req.query, req.body);
            return res.json(result);
        } catch (e) {
            next(e);
        }
    }
    
}

module.exports = new HelpRequestController();