const mongoose = require('mongoose')

const AnythingSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  name: String,
  age: Number,
  class: String,
  score: {
    type: Number,
    index: true,
    unique: false
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  //说明此map是Map类型的数据 key是String类型(规定死的) value是String类型
  //In Mongoose Maps, keys must be strings in order to store the document in MongoDB
  map: {
    type: Map,
    of: String //指明value的类型
  },
  married: Boolean,
  //如果定义一个名称为type的path
  typeTest: {
    //要写成这样
    type: {
      type: String
    }
  }
}, {
  versionKey: false,
  //this will create `createAt`&`updateAt` field in the document
  timestamps: true
})


const AnythingModel = mongoose.model('Anything', AnythingSchema)

module.exports = AnythingModel
