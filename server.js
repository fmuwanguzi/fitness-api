const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
// require connection function
const connectDB = require('./models/index')


app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// connect to mongo database
connectDB()

app.get('/', (req, res) => {
  res.send('Hello from your fitness api')
})

app.use('/fitness', require('./controllers/fitnessController'))
app.use('/foods',require('./controllers/foodController'))
app.use('/workouts',require('./controllers/workoutController'))


const PORT = process.env.PORT || 8003
app.listen(PORT, () => {
  console.log(`Server started on 🦾 ${PORT}`);
})
