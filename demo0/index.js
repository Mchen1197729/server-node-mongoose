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
  const CommentSchema = new mongoose.Schema({
    //name是对象类型 包含first&last属性
    name: {
      first: String,
      last: String
    },
    //comments是数组类型 每一个元素都是对象 该对象中包含body&id属性
    comments: [
      {body: String, id: Number}
    ]
  }, {
    versionKey: false
  })

  /*
  * 为定义的Schema添加虚拟的getter&setter属性
  *   Schema.virtual('虚拟属性名')
  *         .get(function(){
  *             return value;
  *         })
  *         .set(function(newValue){
  *           //do something
  *         })
  *   1.getter属性不会被保存到数据库中
  *   2.setter属性会改变实例上的值
  *   3.虚拟的getter&setter是存在于Model的实例上的
  * */
  CommentSchema.virtual('fullName')
      .get(function () {
        return this.name.first + '--' + this.name.last
      })
      .set(function (fullName) {
        const [first, last] = fullName.split('--')
        this.name.first = first
        this.name.last = last
      })

  //得到Model
  const CommentModel = mongoose.model('comment', CommentSchema)

  /*new CommentModel({
    name: {
      first: 'Kobe',
      last: 'Brant'
    },
    comments: [
      {body: '凌晨四点的洛杉矶', id: 1}
    ]
  }).save((error, comment) => {
    console.log(error, comment)
  })*/
  console.log(new mongoose.Types.ObjectId())
  console.log(new mongoose.Types.ObjectId())
  console.log(new mongoose.Types.ObjectId())
  console.log(new mongoose.Types.ObjectId())
  /*const per = new CommentModel({
    name: {
      first: 'Kobe',
      last: 'Brant'
    },
    comments: [
      {body: '凌晨四点的洛杉矶', id: 1}
    ]
  })
  console.log(per.fullName)
  per.fullName = 'Lebron--James'
  per.save()*/

  app.listen(port, () => {
    console.log(`app is running at port ${port}`)
  })
})
