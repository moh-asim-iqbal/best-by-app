const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
        name: {type: String, required: true},
        expiry: {type: Date, required: true},
        quantity: {type: Number, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('items', ItemSchema)