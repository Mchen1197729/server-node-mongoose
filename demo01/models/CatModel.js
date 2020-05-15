const mongoose = require('mongoose')

//定义Schema
const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  age: Number,
  hobby: [String]
}, {
  //do not create `__v` in database
  versionKey: false
})

//定义Model
const CatModel = mongoose.model('cat', CatSchema)


module.exports = CatModel
