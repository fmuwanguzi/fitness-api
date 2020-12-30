const router = require('express').Router()
const models = require('../models')
const Fitness = require('../models/Fitness');

// desc 
// route GET /fitness/
router.get('/', async (req, res) => {
  try{
    const fitness = await Fitness.find()
    res.status(200).json(fitness)
  }catch(err){
    console.log(err);
    res.status(400)
  }
})

// desc
// route GET /fitness/:name
router.get('/:name', async (req, res) => {
  try{
    const fitness = await Fitness.findOne({name:req.params.name})
    res.status(200).json(fitness)
  }catch(err){
    console.log(err);
    res.status(400)
  }
})

// desc 
// route POST /fitness/
router.post('/', async (req, res) => {
  try{
    const plan = new Fitness({
      goal: req.body.goal
    })
    // const workout = { _id:req.body.workout_id}
    // const food = { _id:req.body.food_id}
    // plan.workout.push(workout)
    // plan.food.push(food)
    plan.save()
    res.status(201).json({ fitness })
  }catch(err){
    console.log(err);
    res.status(400)
  }
})

// desc
// route PUT /fitness/:id
router.put('/:id', async (req, res) => {
  try{
    const fitness = await Fitness.findOne({_id:req.params.id})
    // the following lines get commented back ing when we have values in the object
    // const exercise = {}
    // const meal = {}
    // fitness.workout.push()
    // fitness.food.push()
    res.status(200).json()
  }catch(err){
    console.log(err);
    res.status(400)
  }
})

// desc
// route DELETE /fitness/:id
router.delete('/:id', async (req, res) => {
  try{
    const fitness = await Fitness.findOneAndDelete({_id:req.params.id})
    res.status(200).json()
  }catch(err){
    console.log(err);
    res.status(400)
  }
})

module.exports = router