const express = require('express')
//const Workout = require('../models/workoutModel')

const {
        getWorkouts,
        getWorkout,
        createWorkout,
        deleteWorkout,
        updateWorkout
    } = require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)
/*
router.get('/', (req, res) =>  {
    res.json({mssg:'Get all workouts'})
})*/

//get a single workout
router.get('/:id', getWorkout)
/*
router.get('/:id',(req, res) =>{
    res.json({mssg:'Get a single workout'})
})*/

//post workout 
router.post('/', createWorkout)

//delete workout 
router.delete('/:id', deleteWorkout)

/*
router.delete('/:d',(req,res) =>{
    res.json({mssg:'Detete a workout'})
})
*/

//patch workout
router.patch('/:id', updateWorkout)

/*
router.patch('/:d',(req,res) =>{
    res.json({mssg:'Update a workout'})
})
*/
module.exports = router