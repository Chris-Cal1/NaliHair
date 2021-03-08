var mongoose = require('mongoose')

var recipeSchema = mongoose.Schema({
    title: String,
    benefits: String,
    ingredients: String,
    image: String,
    emploi: String,
    btn: String,
    
})

var recipeModel = mongoose.model('recipes', recipeSchema)

module.exports = recipeModel