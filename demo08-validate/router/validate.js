const router = require('express').Router()

const ValidateModel = require('../models/ValidateModel')

/*
* 调用Model.prototype.save()方法 会自动触发Schema的validate
* */
// new ValidateModel({name: 'Jerry'}).save((error, result) => {
//   console.log(error, result)
// })

/*
* 调用Model.prototype.create()方法 会自动触发Schema的validate
* */
// ValidateModel.create({name: 'ck'}, (error, result) => {
//   console.log(error, result)
// })

/*
* Model.prototype.update()&Model.prototype.updateOne()&Model.prototype.updateMany()&
* Model.prototype.findOneAndUpdate() 是不会自动触发Schema的validate的
*
* 可以在第三个参数的位置添加{runValidators:true}来使得进行跟新操作时进行强制验证
* */
ValidateModel.update({name: 'Jerry'}, {name: 'je'}, {runValidators: true}, (error, result) => {
  console.log(error, result)
})

//1.create
router.post('/test1', (req, res) => {

})

module.exports = router
