const router = require('express').Router()

const SuperModel = require('../models/SuperModel')

// SuperModel.create({children: [{name: 'Jack'}, {name: 'Rose'}]}, (error, result) => {
//   console.log(error, result)
// })

SuperModel.findOne({}, (error, result) => {
  result.children.forEach(child => console.log(child))
})

//1.create
router.post('/test1', (req, res) => {

})

module.exports = router
