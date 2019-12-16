const Events = require('../Models/event');

class DbEventRepository {
    static async add(userDetails) {
        let data = new Events(userDetails.toStoreObject());
        try {
            await data.save();
            return true;
        } catch (err) {
            return false;
        }
    }

}


module.exports = DbEventRepository;