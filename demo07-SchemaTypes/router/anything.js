const router = require('express').Router()

const AnythingModel = require('../models/AnythingModel')


AnythingModel.find((error, students) => {
  //console.log(error, students)
  students.forEach(student => console.log(student._id))
})

//1.create
router.post('/test1', (req, res) => {

})

module.exports = router
