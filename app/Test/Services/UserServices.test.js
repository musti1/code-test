const { expect } = require('chai');
const { it, describe } = require('mocha');
require('../../Infrastructure/DbConnections/mongodb');
const UserService = require('../../Domain/Services/UserService');

describe.only('User Services Test', () => {

    it('should return all objects: get method', async function () {
        this.timeout(10000);
        const resp = await UserService.get();
        expect(resp).to.be.an('array');
    });

    it('should return user object: getByUserId method', async function () {
        this.timeout(10000);
        const resp = await UserService.getByUserId('2c5b4fa0-1db1-11ea-8691-87aabf7df418');
        expect(resp).to.be.an('array');
    });

});