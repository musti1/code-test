const uuid = require('uuid/v1');

class User {
    constructor(id, firstName, lastName, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    toStoreObject() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        }
    }

    static createFromDetails(firstName, lastName, email, password) {
        return new User(
            uuid(),
            firstName,
            lastName,
            email,
            password
        )
    }

    static createFromObject(obj) {
        return new User(
            obj.id,
            obj.firstName,
            obj.lastName,
            obj.email,
            obj.password
        );
    }
}

module.exports = User;