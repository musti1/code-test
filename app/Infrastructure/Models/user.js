const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: { type: String, unique: true, required: true },
    firstName: String,
    lastName: String,
    email: String,
    password: String
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false
});

module.exports = mongoose.model('users', UserSchema);