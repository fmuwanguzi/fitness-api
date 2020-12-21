const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI + '/fitness', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = {
  Fitness: require('./Fitness'),
}