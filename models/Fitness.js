const mongoose = require('mongoose');

const fitnessSchema = new mongoose.Schema({
    name: String,
    
    level: {
        type: String,
        required: true 
    }


})

module.exports = mongoose.model('fitness', fitnessSchema)