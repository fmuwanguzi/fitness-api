const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Fitness.find().then((userFitness) => {
      res.status(200).json({ fitness: userFitness })
    })
    .catch((error) => res.send({ error }))})

    router.get('/:id', (req, res) => {
        models.Fitness.findOne({_id: req.params.id}).then((fitness) => {
          res.status(200).json({ fitness })
        })
        .catch((error) => res.send({ error }))
    })
      
      
    router.post('/', (req, res) => {
        console.log(req.body);
        const workout = {
            workoutName: req.body.workout.workoutName,
            bodypart: req.body.workout.bodypart,
            level: req.body.workout.level,
            reps : req.body.workout.reps,
            sets : req.body.workout.sets,
            image : req.body.workout.image,
            description : req.body.workout.description
        }
        const food = {}
        
        const fitness = {
            workout : [workout],
            food : [food],
            goal: req.body.goal
        }
        models.Fitness.create({ fitness })
            .then((fitness) => {
          res.status(201).json({ fitness })
        })
        .catch((error) => res.send({ error }))})
      
      
      router.put('/:id', (req, res) => {
     
        
        const { level } = req.body
        
        models.Fitness.update({
          _id: req.params.id
        }, {$set: {level
        }})
        .then((fitness) => {
          res.status(201).json({ fitness })
        })
        .catch((error) => res.send({ error }))
      })
      
      router.delete('/:id', (req, res) => {
        models.Fitness.deleteOne({ _id: req.params.id })
        .then((fitness) => res.status(201).json({ fitness }))
        .catch((error) => res.send({ error }))
      })

module.exports = router