const UsersRepository = require('../../Infrastructure/MongoRepository/DbUsersRepository');

class UserService {
    static async get() {
        return await UsersRepository.get();
    }

    static async getByUserId(id) {
        return await UsersRepository.getByUserId(id);
    }

}

module.exports = UserService;