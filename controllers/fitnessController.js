const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Fitness.find().then((userFitness) => {
      res.status(200).json({ fitness: userFitness })
    })
    .catch((error) => res.send({ error }))})

module.exports = router