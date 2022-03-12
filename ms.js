const mongoose = require('mongoose')
const schema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        phone: Number
    }
);
// Collection name -> apis
const Model = mongoose.model('apis', schema);

module.exports = Model;