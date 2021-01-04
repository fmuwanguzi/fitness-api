const mongoose = require('mongoose')

// const ingredientSchema = new mongoose.Schema({
//     ingredient: String,
//     quantity: Number,
//     unit: String
// })

// const foodSchema = new mongoose.Schema({
//     name: String,
//     ingredients: [ingredientSchema],
//     difficulty: {
//         type: String,
//         default: 'beginner',
//         enum: ['beginner','intermediate']
//     },
//     image : String
// })

const foodSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    instructions : [String],
    nutritionData: [String],
    image : String
})

module.exports = mongoose.model('Food',foodSchema)