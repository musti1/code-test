const EventRepository = require('../../Infrastructure/MongoRepository/DbEventRepository');
const Event = require('../Core/Event');

class EventService {
    static async add(end, start, title, details, location, userId) {
        const usr = Event.createFromDetails(end, start, title, details, location, userId);
        return await EventRepository.add(usr);
    }
}

module.exports = EventService;