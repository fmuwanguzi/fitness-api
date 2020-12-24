const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({

    name: String,
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

module.exports = mongoose.model('Workout',workoutSchema)