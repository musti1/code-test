const uuid = require('uuid/v1');


class Event {
    constructor(id, end, start, title, details, location, userId) {
        this.id = id;
        this.end = end;
        this.start = start;
        this.title = title;
        this.details = details;
        this.location = location;
        this.userId = userId;
    }

    toStoreObject() {
        return {
            id: this.id,
            end: this.end,
            start: this.start,
            title: this.title,
            details: this.details,
            location: this.location,
            userId: this.userId
        }
    }

    static createFromDetails(end, start, title, details, location, userId) {
        return new Event(
            uuid(),
            end,
            start,
            title,
            details,
            location,
            userId
        )
    }

    static createFromObject(obj) {
        return new Event(
            obj.id,
            obj.end,
            obj.start,
            obj.title,
            obj.details,
            obj.location,
            obj.userId
        );
    }
}

module.exports = Event;