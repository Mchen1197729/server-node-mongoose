const mongoose = require('mongoose')

const StarSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  married: Boolean
}, {
  versionKey: false,
  //this will create `createAt`&`updateAt` field in the document
  timestamps: true
})

const StarModel = mongoose.model('Star', StarSchema)

module.exports = StarModel
