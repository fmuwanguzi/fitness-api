const mongoose = require('mongoose');

const fitnessSchema = new mongoose.Schema({
    // workout: [workoutSchema],//workout 
    workout:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    }],
    food:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }],

    // food: [nutritionSchema], //third party api , for food
    goal: String  // user input 
})

module.exports = mongoose.model('fitness', fitnessSchema)