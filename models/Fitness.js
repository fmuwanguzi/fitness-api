const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    day: String,
    workout: String,
    reps: number
})

const nutrition = new mongoose.Schema({
   placeholder: String 
})


const fitnessSchema = new mongoose.Schema({
    name: String,
    level: {
        type: String,
        required: true 
    },
    age: {
        type: Number,
        min: 1,
        max: 100
    },
    plan: [planSchema],
    food: [nutrition]
})

module.exports = mongoose.model('fitness', fitnessSchema)