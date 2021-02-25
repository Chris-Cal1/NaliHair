var mongoose = require('mongoose')

var articleSchema = mongoose.Schema({
    name: String,
    rating: Number,
    composition: String,
    image: String,
    type: String,
    
})

var articleModel = mongoose.model('articles', articleSchema)

module.exports = articleModel