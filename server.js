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
const models = require('./models')

app.get('/', (req, res) => {
  res.send('Hello from the your fitness api')
})

app.use('/bounties', require('./controllers/fitnessController'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server started on 🦾 ${PORT}`);
})
