const autoBind = require('auto-bind');
const db = require('./db.js');

class Repository{
    constructor(model){
        this.model = model;
        db.connect();
        autoBind(this);
    }

    async getAll(query){
        try{
            return await this.model.find(query);
        } catch(error){
            console.log(error);
            throw Error('error getting the list of data');
        }
    }

    async get(id){
        try {
            const item = await this.model.findOne({id:id});
            if (!item) {
                const error = new Error('item not found');
                error.statusCode = 404;
                throw error;
            }
            return {
                error:false,
                statusCode:200,
                data:item
            };
        } catch (error) {
            console.log(error);
            throw Error('error in get');
        }         
    }

    async insert(data){
        try{
            const item = await this.model.create(data);
            if(item){
                return {
                    error:false,
                    statusCode:200,
                    data:item
                };
            }
            throw new Error('Something wrong happened');
        } catch(error){
            console.log(error);
            throw Error('error in insert');          
        }
    }

    async update(id, data){
        try{
            const item = await this.model.updateOne({id:id}, data);
            return {
                error:false,
                statusCode:200,
                data:item
            };
        } catch(error) {
            console.log(error);
            throw Error('error in update');           
        }
    }

    async delete(id){
        try{
            const item = await this.model.deleteOne({id:id});
            if(!item){
                const error = new Error('error');
                error.statusCode = 404;
                throw error;
            } else {
                return {
                    error:false,
                    statusCode:200,
                    data:item
                };
            }
        } catch (error){
            console.log(error);
            throw Error('error in delete');           
        }
    }
}

module.exports = Repository;