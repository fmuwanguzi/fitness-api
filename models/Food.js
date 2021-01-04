const mongoose = require('mongoose')

// const ingredientSchema = new mongoose.Schema({
//     ingredient: String,
//     quantity: String,
//     unit: String
// })

// const nutritionItemSchema = new mongoose.Schema({
//     facts: String,
//     quantity: String,
//     unit: String

// })

const foodSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    instructions : [String],
    nutritionData: [String],
    image : String
})

module.exports = mongoose.model('Food',foodSchema)