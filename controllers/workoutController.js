const router = require('express').Router();
const models = require('../models');
const cloudinary = require('../config/cloudinary');
const upload = require('../config/multer');
const Workout = require('../models/Workout');
require("dotenv").config();


// desc
// route GET /workouts/bodypart:name
router.get('/bodypart/:name', async (req,res)=>{
    console.log('connected');
    try{
        const workouts = await Workout.find({bodypart:req.params.name})
        res.status(200).json(workouts)
    }catch(err){

    }
})

// desc retrieves one workout instance from the db
// route GET /workouts/
router.get('/specworkout/:id',async(req,res)=>{
    try{
        const workout = await Workout.findOne({_id:req.params.id})
        res.status(200).json(workout)
    }catch(err){
        console.log(err);
        res.status(400)

    }
});


// desc adds a new workout to the deb
// route POST /workouts/
router.post('/', async (req,res)=>{
    // const {name,bodypart,level,reps,sets,image,description} = req.body
    try{
        // const newWorkout = new Workout({
        //     name,
        //     bodypart,
        //     level,
        //     reps,
        //     sets,
        //     image,
        //     description
        // })
        // newWorkout.save()
        const {bodyPart, article} = req.body
        let url = `https://muscleandfitness.com/workouts/${bodyPart}/${article}/`
        const info = await workoutScraper(url)
        console.log(url);
        // res.status(200).json(info)
        // res.status(200).json(newWorkout)
    }catch(err){
        console.log(err);
        res.status(400)

    }
});





module.exports = router; 

