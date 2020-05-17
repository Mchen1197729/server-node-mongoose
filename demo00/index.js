const app = require('express')()

const mongoose = require('mongoose')

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/study_mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//2.获取连接对象
const connection = mongoose.connection

//3.监听数据库连接成功
const port = 5400
connection.on('connected', () => {
  console.log('database connect success')
  /*
  * 所有关于数据库的操作都应该写在此回调函数中
  * */

  //定义Schema
  const CatSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    weight: Number
  }, {
    versionKey: false
  })

  //为特定的Model添加自定义方法(一定要在生成Model之前添加才有效果)
  CatSchema.methods.xxx = function (callback) {
    return mongoose.model('cat', CatSchema).find({age: this.age - 20}, callback)
  }
  //得到Model
  const CatModel = mongoose.model('cat', CatSchema)
  new CatModel({age: 7}).xxx((error, cat) => {
    console.log(error, cat)
  })


  /*new CatModel({
    name: '小黑',
    age: 5,
    sex: 'male',
    weight: 33.8
  }).save((error, cat) => {
    if (error) {
      console.log('save error:', error)
    } else {
      console.log('save success:', cat)
    }
  })*/

  /*CatModel.find({age: 5}, (error, cats) => {
    if (error) {
      console.log(error)
    } else {
      console.log(cats)
    }
  })*/

  app.listen(port, () => {
    console.log(`app is running at port ${port}`)
  })
})
