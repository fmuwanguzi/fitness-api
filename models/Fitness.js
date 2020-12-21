const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    workout: String,
    bodypart: String,
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

//We will be using a third party api for this
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