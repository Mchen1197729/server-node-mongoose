const mongoose = require('mongoose')

const idSchema = new mongoose.Schema({
  id: Number
})

const TankSchema = new mongoose.Schema({
  size: String,
  price: Number
}, {
  versionKey: false,
  //this will create `createAt`&`updateAt` field in the document
  timestamps: true
})

//add self-defined method in document
TankSchema.method({
  method1(args) {
    console.log('I am method1 using by ' + args)
  },
  method2(args) {
    console.log('I am method2 using by ' + args)
  }
})

/*
* Schema.prototype.static
* -> adds static methods to Model compiled from this Schema
* */
TankSchema.static({
  static1() {
    console.log('I am static1')
  },
  static2() {
    console.log('I am static2')
  }
})

/*
* Plugin
* */

TankSchema.plugin(schema => {
  //schema refers to `TankSchema`
  schema.virtual('author')
      .get(() => {
        return 'chenMM'
      })
})

/*
* Hook
* */

TankSchema.pre('save', next => {
  console.log('you are gonging to save one document')
  next()
})

TankSchema.pre('deleteOne', next => {
  console.log('you are going to delete one document using TankModel.deleteOne()')
  next()
})

TankSchema.pre('deleteOne', {document: true}, next => {
  console.log('you are going to delete one document using tank.deleteOne()')
  next()
})

TankSchema.post('save', doc => {
  console.log('you have just saved one doc:', doc)
})

/*
* queue:exec when each document is instantiated
* */
TankSchema.queue('method1', ['I am args'])
TankSchema.queue('method2', ['I am args'])

const TankModel = mongoose.model('Tank', TankSchema.add(idSchema).add({age: Number}))

TankModel.static1()
TankModel.static2()

//now the path contains `id`&`age`
TankSchema.eachPath((path, type) => {
  //console.log(path, type)
})


//console.log(TankSchema.path('price'))

module.exports = TankModel