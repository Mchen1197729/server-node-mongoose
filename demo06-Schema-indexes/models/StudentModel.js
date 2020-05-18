const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
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
  married: Boolean
}, {
  versionKey: false,
  //this will create `createAt`&`updateAt` field in the document
  timestamps: true
})

//console.log(StudentSchema.indexes())

StudentSchema.eachPath(path => console.log(path))


const StudentModel = mongoose.model('Student', StudentSchema)

module.exports = StudentModel
