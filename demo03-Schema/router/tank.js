const router = require('express').Router()

const TankModel = require('../models/TankModel')

router.post('/add', (req, res) => {
  const {size, price, id, age} = req.body
  TankModel.create({size, price, id, age}, (error, tank) => {
    console.log(error, tank.author)
    tank.method1('router')
    tank.method2('router')
  })
  res.send({code: 0, msg: 'request success'})
  //count the number of documents in the collection
  TankModel.estimatedDocumentCount({}, (error, result) => {
    console.log('estimatedDocumentCount:', result)
  })

  //judge if the collection contains a matched document
  TankModel.exists({id: 2}, (error, result) => {
    console.log('exists:', error, result) //null  true
  })

  //find(option,filter,callback)
  TankModel.find({id: 2}, {size: true, price: true, _id: false}, (error, tanks) => {
    console.log('find:', error, tanks)
  })

  //findOne(option)
  TankModel.findOne({id: 2}, {size: true, price: true}, (error, tank) => {
    console.log('findOne:', error, tank)
  })

  //findById()
  TankModel.findById('5ebf3e2be2ccf90ac85c07b6', {size: true, price: true}, (error, tank) => {
    console.log('findById:', error, tank)
  })

  //findByIdAndDelete() findByIdAndRemove()
  TankModel.findByIdAndDelete('')
})

router.post('/delete', (req, res) => {
  const {id} = req.body
  // TankModel.deleteOne({id}, (error, result) => {
  //   console.log('/delete', error, result)
  //   res.send({code: 0, msg: 'request success'})
  // })
  TankModel.findOne({id}, (error, tank) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      tank.deleteOne()
      res.send({code: 0, msg: 'request success', tank})
    }
  })
})

module.exports = router