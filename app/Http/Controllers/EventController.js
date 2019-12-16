const EventsServices = require('../../Domain/Services/EventService');
const error = 'Something went wrong';
class EventController {
    static async add(req, res) {
        const { end, start, title, details, location, user_id } = req.body;
        const result = await EventsServices.add(end, start, title, details, location, user_id);
        if (result) {
            return res.status(200).json({
                result
            })
        } else {
            return res.status(500).json({
                error
            })
        }
    }

}

module.exports = EventController;