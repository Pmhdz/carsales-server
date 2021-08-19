const express = require('express')

const router = express.Router()

// require car model
const Car = require('./../models/car')
const handle404 = require('./../../lib/custom_errors')

// CREATE
// POST /checks/
router.post('/checks', (req, res, next) => {
  // get the check data from the body of the request
  const checkData = req.body.check
  // get the car id from the body
  const carId = checkData.carId
  // find the car by its id
  Car.findById(carId)
    .then(handle404)
    .then(car => {
      // add check to car
      car.checks.push(checkData)
      // save car
      return car.save()
    })
  // send response back to client
    .then(car => res.status(201).json({ car: car }))
    .catch(next)
})

// DESTROY
// DELETE /checks/:id
router.delete('/checks/:checkId', (req, res, next) => {
  const checkId = req.params.checkId
  const carId = req.body.check.carId

  Car.findById(carId)
    .then(handle404)
    .then(car => {
      car.checks.id(checkId).remove()
      return car.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
