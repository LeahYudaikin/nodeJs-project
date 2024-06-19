const Service = require('./Service.js');
const helpRequestRepo = require('../repositories/HelpRequestRepo.js');
const volunteerRepo = require('../repositories/VolunteerRepo.js')

class HelpRequestService extends Service {
    constructor() {
        super(helpRequestRepo);
    }

    async filtering(query){
        try{
            const help_requests = await this.repo.getAll().filter(h => h.status == 'waiting');
            if(query.location){
                help_requests = help_requests.filter(h => h.location == query.location);
            }
            if(query.priority){
                help_requests = help_requests.filter(h => h.priority == query.priority);
            }
            return help_requests;
        } catch(error){
            console.log(error);
            throw Error('error getting the list of data');
        }
    }

    async IVolunteer(query){
        try{
            const volunteer = await volunteerRepo.get(query.volunteerId);
            if(volunteer){
                const helpRequest = await this.repo.get(query.helpRequestId);
                if(helpRequest){
                    helpRequest.status = 'care';
                    helpRequest.volunteer = query.volunteerId;
                    const UpdateVolunteer = await this.repo.update(
                        query.helpRequestId,
                        helpRequest
                    );
                    return UpdateVolunteer;
                }
                else{
                    throw Error('helpRequest not found')
                }
            }
            else{
                throw Error('volunteerId not found')
            }
        } catch(error){
            console.log(error);
            throw Error('error in IVolunteer');
        }
    }

    async NewVolunteer(query, data){
        try{
            const volunteers = await volunteerRepo.getAll();
            data.id = volunteers.length+1;
            const volunteer = volunteers.find((v) => v.id == query.volunteerId);
            if(volunteer){
                throw Error('volunteerId found')
            }
            else{        
                const newVolunteer = await volunteerRepo.insert(data);
                if (newVolunteer) {
                  return newVolunteer;
                } else {
                    throw Error('Failed to create new volunteer')             
                }
            }
        } catch(error){
            console.log(error);
            throw Error('error in NewVolunteer');
        }
    }
}

module.exports = new HelpRequestService();