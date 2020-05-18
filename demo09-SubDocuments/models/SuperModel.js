const mongoose = require('mongoose')

const SubSchema = new mongoose.Schema({
  name: String
})

const SuperSchema = new mongoose.Schema({
  //child: SubSchema,
  children: [SubSchema],
  age: Number
}, {
  versionKey: false,
  //this will create `createAt`&`updateAt` field in the document
  timestamps: true
})

SuperSchema.eachPath(path => console.log(path))


const SuperModel = mongoose.model('Super', SuperSchema)

module.exports = SuperModel
