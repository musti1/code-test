const { expect } = require('chai');
const { it, describe } = require('mocha');
require('../../Infrastructure/DbConnections/mongodb');
const EventService = require('../../Domain/Services/EventService');

const uid = '2c5b4fa0-1db1-11ea-8691-87aabf7df418';

let location = {
    "address": "xyz street",
    "latLng": {
        "lat": 5555,
        "lng": 9999
    }
};

describe.only('Event Services Test', () => {


    it('should return true: add method', async function () {
        this.timeout(10000);
        const resp = await EventService.add('2019-12-13T13:28:31.253Z', '2019-12-13T13:28:31.253Z', 'title', 'details', location, uid);
        expect(resp).to.equal(true);
    });

});