const express = require('express')
const CatModel = require('../models/CatModel')

const router = express.Router()

//1.add one cat to database
router.post('/add', (req, res) => {
  const {name, age, hobby} = req.body
  //向数据表中添加
  // new CatModel({name, age, hobby})
  //     .save((error, cat) => {
  //       if (error) {
  //         res.send({code: -1, msg: 'request error', error})
  //       } else {
  //         res.send({code: 0, msg: 'request success', cat})
  //       }
  //     })

  //or by the way below
  CatModel.create({name, age, hobby}, (error, cat) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', cat})
    }
  })

  //insert many at a time
  // CatModel.insertMany([{name, age, hobby}, {name, age: age + 10, hobby}], (error, cats) => {
  //   if (error) {
  //     res.send({code: -1, msg: 'request error', error})
  //   } else {
  //     res.send({code: 0, msg: 'request success', cats})
  //   }
  // })
})

//2.get one cat according to some params
router.get('/one', (req, res) => {
  console.log(req.query)
  const {name, age, hobby} = req.query
  //check the value
  CatModel.find({age: Number(age)}, (error, cats) => {
    console.log(error, cats)
  })
  res.send({code: 0, msg: 'request success'})
})

router.delete('/one', (req, res) => {
  //delete one from database
  const {name} = req.body
  CatModel.deleteOne({name}, (error, res) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', res})
    }
  })
})


module.exports = router
