class Service{
    constructor(repo){
        this.repo = repo;
    }

    async getAll(query){
        try{
            return await this.repo.getAll(query);
        } catch(error){
            console.log(error);
            throw Error('error getting the list of data');
        }
    }

    async get(id){
        try {
            const item = await this.repo.get(id);
            if (!item) {
                const error = new Error('item not found');
                error.statusCode = 404;
                throw error;
            }
            return item;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async insert(data){
        try{
            const array = await this.repo.getAll();
            data.id = array.length+1;
            const item = await this.repo.insert(data);
            if(item){
                return item;
            }
            throw new Error('Something wrong happened');
        } catch(error){
            console.log(error);
            throw Error('error in insert');          
        }
    }

    async update(id, data){
        try{
            const item = await this.repo.update(id, data, {new: true});
            if(!item){
                const error = new Error('error');
                error.statusCode = 404;
                throw error;
            } else {
                return item;
            }        
        } catch(error) {
            console.log(error);
            throw Error('error in update');           
        }
    }

    async delete(id){
        try{
            const item = await this.repo.delete(id);
            if(!item){
                const error = new Error('error');
                error.statusCode = 404;
                throw error;
            } else {
                return item;
            }
        } catch (error){
            console.log(error);
            throw Error('error in delete');           
        }
    }
}

module.exports = Service;