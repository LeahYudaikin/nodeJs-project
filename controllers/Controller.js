const autoBind = require('auto-bind');
const { query } = require('express');

class Controller {
    constructor(service){
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next){
        try {
            const result = await this.service.getAll(req.query);
            return res.json(result);
        } catch (e){
            next(e);
        }
    }

    async get(req, res, next){
        try {
            const id = req.params.id;
            const result = await this.service.get(id);
            return res.status(result.statusCode).json(result);
        } catch (e) {
            next(e);
        }
    }

    async insert(req, res, next){
        try{
            const response = await this.service.insert(req.body);
            return res.status(response.statusCode).json(response);
        } catch (e){
            next(e);
        }
    }

    async update(req, res, next){
        try{
            const response = await this.service.update(req.params.id, req.body);
            return res.status(response.statusCode).json(response);
        } catch (e){
            next(e);
        }
    }

    async delete(req, res, next){
        try{
            const response = await this.service.delete(req.params.id);
            return res.status(response.statusCode).json(response);
        } catch (e){
            next(e);
        }
    }
}

module.exports = Controller;