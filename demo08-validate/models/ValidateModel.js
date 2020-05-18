const mongoose = require('mongoose')

const ValidateSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: name => {
      console.log('name validate')
      return name.length > 3
    }
  }
}, {
  versionKey: false,
  //this will create `createAt`&`updateAt` field in the document
  timestamps: true
})


const ValidateModel = mongoose.model('Validate', ValidateSchema)

module.exports = ValidateModel
