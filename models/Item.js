const mongoose = require('mongoose')

const Item = mongoose.model('Person', {
    userName: String,
    title: String,
    content: String,
    createdAt: Date,
})

module.exports = Item