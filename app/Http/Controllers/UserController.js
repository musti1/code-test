const UserServices = require('../../Domain/Services/UserService');
const error = 'Something went wrong';
class UserController {

    static async get(req, res) {
        const result = await UserServices.get();
        if (result) {
            return res.status(200).json({result})
        } else {
            return res.status(500).json({error})
        }
    }

    static async getByUserId(req, res) {
        const result = await UserServices.getByUserId(req.body.id);
        if (result) {
            return res.status(200).json({result})
        } else {
            return res.status(500).json({error})
        }
    }

}

module.exports = UserController;