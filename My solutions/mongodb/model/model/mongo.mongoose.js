const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Data', dataSchema);
