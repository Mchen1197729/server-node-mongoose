const router = require('express').Router()

const TankModel = require('../models/TankModel')

//1.findByIdAndDelete
router.post('/test1', (req, res) => {
  const {id} = req.body
  TankModel.findByIdAndDelete(id, (error, tank) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', tank})
    }
  })
})

//2.findByIdAndRemove
router.post('/test2', (req, res) => {
  const {id} = req.body
  TankModel.findByIdAndRemove(id, (error, tank) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', tank})
    }
  })
})

//3.estimatedDocumentCount()
router.get('/test3', (req, res) => {
  TankModel.estimatedDocumentCount((error, count) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', count})
    }
  })
})

//4.bulkWrite()
router.post('/test4', (req, res) => {
  TankModel.bulkWrite([
    //数组中的每个元素执行一项任务
    {
      insertOne: {
        document: {
          name: '人间坦克一号',
          price: 1200,
          size: 'large'
        }
      }
    },
    {
      deleteOne: {
        filter: {
          _id: '5ebf3a7fd5350d28f89446d3'
        }
      }
    }
  ], (error, tanks) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', tanks})
    }
  })
})

//5-findOneAndReplace->NOT OK
router.post('/test5', (req, res) => {
  const {_id} = req.body
  TankModel.findOneAndReplace({_id}, {
    name: '人间大炮007号',
    price: 9000,
    size: 'large',
  }, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

//6-findOneAndUpdate->OK
router.post('/test6', (req, res) => {
  const {_id} = req.body
  TankModel.findOneAndUpdate({_id}, {
    name: '人间大炮007号',
    // price: 9000,
    // size: 'large',
  }, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

//7.create
router.post('/test7', (req, res) => {
  const {name, size, price} = req.body
  TankModel.create({name, size, price}, (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
  })
})

module.exports = router