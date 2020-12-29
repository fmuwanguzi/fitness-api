const router = require('express').Router()
const models = require('../models')
const Fitness = require('../models/Fitness');

// desc 
// router /fitness
router.get('/', (req, res) => {
    Fitness.find().then((userFitness) => {
      res.status(200).json({ fitness: userFitness })
    })
    .catch((error) => res.send({ error }))})

    router.get('/:id', (req, res) => {
        Fitness.findOne({_id: req.params.id}).then((fitness) => {
          res.status(200).json({ fitness })
        })
        .catch((error) => res.send({ error }))
    })
      
      
    router.post('/', (req, res) => {
        console.log(req.body);
        // const workout = {
        //     workoutName: req.body.workout.workoutName,
        //     bodypart: req.body.workout.bodypart,
        //     level: req.body.workout.level,
        //     reps : req.body.workout.reps,
        //     sets : req.body.workout.sets,
        //     image : req.body.workout.image,
        //     description : req.body.workout.description
        // }
        // const food = {}

        const plan = new Fitness({
            goal: req.body.goal
          })
          const workout = {

            workoutName: req.body.workout.workoutName,
            bodypart: req.body.workout.bodypart,
            level: req.body.workout.level,
            reps: req.body.workout.reps,
            sets: req.body.workout.sets,
            image: req.body.workout.image,
            description: req.body.workout.description
          }
          const food = {}
          plan.workout.push(workout)
          plan.food.push(food)
          plan.save()
        
        const fitness = {
            workout : [workout],
            food : [food],
            goal: req.body.goal
        }
        Fitness.create({ //$push is used to add information to the embedded schemas //food will come from a third party api
            fitness : {goal: req.body.goal, $push:{workout: workout }, $push:{food: food} }
        })
            
            .then((fitness) => {
          res.status(201).json({ fitness })
        })
        .catch((error) => res.send({ error }))})
      
      
      router.put('/:id', (req, res) => {

        
        // res.send('put request')
        console.log('---this is put route---');
        
        const { level , bodypart } = req.body.workout[0];

        //const { level } = req.body;
        console.log('this is req params id', req.params.id)
        
        
        console.log('-----this is the level-----', req.body.workout[0].level )
        Fitness.updateMany({
        //Fitness.findOneAndUpdate({
          _id: req.params.id
        }, {$set: 
            //{ goal: level }
            { 
                'workout.0.level' : level,
                //'workout.0.bodypart' : bodypart
            },
            
        },{multi : true} )
        .then((fitness) => {
          res.status(201).json({ fitness })
        })
        .catch((error) => res.send({ error }))
      })
     
      
      router.delete('/:id', (req, res) => {
        Fitness.deleteOne({ _id: req.params.id })
        .then((fitness) => res.status(201).json({ fitness }))
        .catch((error) => res.send({ error }))
      })

module.exports = router