const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    id: { type: String, unique: true, required: true },
    end: { type: Date, default: Date.now() },
    start: { type: Date, default: Date.now() },
    title: { type: String },
    details: { type: String },
    location: {
        address: { type: String },
        latLng: {
            lat: { type: Number },
            lng: { type: Number },
        },
    },
    userId: { type: String }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false
});

module.exports = mongoose.model('events', EventSchema);