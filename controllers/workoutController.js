const router = require('express').Router()
const Workout = require('../models/Workout')
const workoutScraper = require('../scrapers/workoutScraper')

// desc retrieves all workout instances from the db
// route GET /workouts/
router.get('/', async (req,res)=>{
    try{
        const workouts = await Workout.find()
        res.status(200).json(workouts)
    }catch(err){
        console.log(err);
        res.status(400)
    }
})

// desc retrieves one workout instance from the db
// route GET /workouts/
router.get('/:name',async(req,res)=>{
    try{
        const food = await Food.findOne({name:req.params.name})
        res.status(200).json(food)
    }catch(err){
        console.log(err);
        res.status(400)
    }
})

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
})

// desc retrieves all workout instances from the db
// route PUT /workouts/
router.put('/edit/:name',async (req,res)=>{
    console.log(req.params.name);
    console.log(req.body);
    const {name,bodypart,level,reps,sets,image,description} = req.body
    try{
        //this is copied from foods, but if, else if statements can be made for each param 

        // if (difficulty){
        //     const workout = await Workout.findOneAndUpdate({
        //         name: req.params.name
        //     },{$set : {difficulty:difficulty}}).then(workout=>{
        //         res.send(workout)
        //     })
        // } 
        // else if(){
        //     // function needed to take each ingredient test against ingredient in array then $set change
        // }else if(){
        //     console.log('');
        // }else{}


    }catch(err){
        console.log(err);
    }
})

// desc retrieves all workout instances from the db
// route DELETE /workouts/
router.delete('/delete/:name', async (req,res)=>{
    try{
        await Workout.findOneAndDelete({
            name: req.params.name
        }).then(workout=>{
            res.send(workout)
        })

        // res.status(204).json('completed')
    }catch(err){
        console.log(err);
        res.status(400)
    }
})

module.exports = router