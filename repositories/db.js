const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://sw0504147596:1234@cluster.vtbpacr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
            ,{
                useNewUrlParser :  true ,
                useUnifiedTopology :  true ,
                dbName: 'Nodejs-Project'
            }
        );
        console.log('connected to db');
    } catch (error) {
        console.log(error);
        throw Error('Error connecting to db. please try later...');
    }
}

module.exports = { connect }