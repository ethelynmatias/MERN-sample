//npm init -y : to intall package.json
//npm install express : to install express package for backend
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//start express app 
const app = express();

//middleware 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db 
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request 
        app.listen(process.env.PORT, () =>{
            console.log("connect to db listening on port", process.env.PORT);
        })
    })
    .catch((error) =>{
        console.log(error)
    })
/*
app.get('/', (req, res) =>  {
    res.json({mssg:'Welcome to the app'})
})*/

//npm install -g nodemon : re run application by detecting the changes
//"dev":"nodemon server.js" : use this to run nodemon server,js add this under package.json
//npm install dotenv : is package to load environment variables on .env file
//Middleware any code that executes request from the server
//https://www.mongodb.com/ : set up a database using mongo db nosql 
//npm install mongoose : read and write database and connect database

//after model, controller, now for view create a react application

//REACT FRONT END CREATION BELOW:
//npx create-react-app frontend : run this to create front end react js
//npm install react-router-dom