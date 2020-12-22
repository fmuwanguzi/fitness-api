const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({

    workout: String,
    bodypart: String,
    level: {
        type: String,
        required: true,
    },
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
    },
    time : { 
        type : Date, 
        default: Date.now 
    }
})

//We will be using a third party api for this
const nutrition = new mongoose.Schema({
   placeholder: String 
})


const fitnessSchema = new mongoose.Schema({

    plan: [planSchema],//workout 
    food: [nutrition], //third party api , for food
    goal: String  // user input 
})

module.exports = mongoose.model('fitness', fitnessSchema)