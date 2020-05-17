const mongoose = require('mongoose')

const TankSchema = new mongoose.Schema({
  name: String,
  size: String,
  price: Number
}, {
  versionKey: false,
  //this will create `createAt`&`updateAt` field in the document
  timestamps: true
})

const TankModel = mongoose.model('Tank', TankSchema)

module.exports = TankModel