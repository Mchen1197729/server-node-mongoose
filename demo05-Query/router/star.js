const router = require('express').Router()

const StarModel = require('../models/StarModel')

StarModel.find((error, stars) => {
  stars.forEach(star => ([star.id == star._id, star.id === star._id]))//[true,false]
})

//1.create
router.post('/test1', (req, res) => {
  const {name, age, gender, married} = req.body
  StarModel.create({name, age, gender, married}, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = router
