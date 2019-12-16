const Users = require('../Models/user');

class DbUsersRepository {

    static async get() {
        try {
            return await Users.aggregate([
                {
                    $lookup: {
                        from: "events",
                        localField: "id",
                        foreignField: "userId",
                        as: "events"
                    }
                }
            ]);
        } catch (err) {
            return false;
        }
    }

    static async getByUserId(id) {
        try {
            return await Users.aggregate([
                {
                    $match: {
                        id
                    }
                },
                {
                    $lookup: {
                        from: "events",
                        localField: "id",
                        foreignField: "userId",
                        as: "events"
                    }
                }
            ]);
        } catch (err) {
            return false;
        }
    }

}


module.exports = DbUsersRepository;