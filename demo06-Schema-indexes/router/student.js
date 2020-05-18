const router = require('express').Router()

const StudentModel = require('../models/StudentModel')
// StudentModel.create({
//   id: 1,
//   name: '王艺',
//   age: 27,
//   class: '三年一班',
//   score: 98,
//   gender: 'male',
//   married: false
// }, (error, student) => {
//   console.log(error, student)
// })

// StudentModel.create({
//   id: 3,
//   name: '张百川',
//   age: 25,
//   class: '三年二班',
//   score: 95,
//   gender: 'female',
//   married: true
// }, (error, student) => {
//   console.log(error, student)
// })

// StudentModel.create({
//   id: 333,
//   name: '张百川',
//   age: 25,
//   class: '三年二班',
//   score: 95,
//   gender: 'female',
//   married: true
// }, (error, student) => {
//   console.log(error, student)
// })

StudentModel.find((error, students) => {
  //console.log(error, students)
  students.forEach(student => console.log(student._id))
})

//1.create
router.post('/test1', (req, res) => {

})

module.exports = router
