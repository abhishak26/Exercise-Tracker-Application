require ('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to mongodb')
    })
    .catch((error) => {
        console.log(error)
    })

//listen for local requests
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => {
        console.log('listening on port', PORT)
    })
}

module.exports = app
