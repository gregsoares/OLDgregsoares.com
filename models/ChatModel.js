const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    id: Number
});

const Message = mongoose.model('messages', contactSchema)

module.exports = Message;