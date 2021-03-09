var mongoose = require('mongoose')

var recipeSchema = mongoose.Schema({
    day: String,
    title: String,
    benefits: String,
    ingredients: Array,
    image: String,
    emploi: String,
    btn: String,
    
})

var recipeModel = mongoose.model('recipes', recipeSchema)

module.exports = recipeModel