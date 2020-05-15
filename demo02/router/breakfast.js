const router = require('express').Router()

const BreakfastModel = require('../models/BreakfastModel')

router.get('/', (req, res) => {
  /*BreakfastModel.create({
    eggs: 2,
    bacon: 0,
    drink: 'Milk'
  }, (error, res) => {
    console.log(error, res)
  })*/
  BreakfastModel.create({age: 10, name: 'JerryJerryJerry'}, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = router
