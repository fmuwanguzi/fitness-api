const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({

    workoutName: String,
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
    //goal: String
    time : { 
        type : Date, 
        default: Date.now 
    }
})

//We will be using a third party api for this
const nutritionSchema = new mongoose.Schema({
   placeholder: String 
})


const fitnessSchema = new mongoose.Schema({
    // workout:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'workout'
    // }]

    workout: [workoutSchema],//workout 
    food: [nutritionSchema], //third party api , for food
    goal: String  // user input 
})

module.exports = mongoose.model('fitness', fitnessSchema)