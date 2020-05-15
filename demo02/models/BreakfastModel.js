const mongoose = require('mongoose')

/*
* Validators
* */
const BreakfastSchema = new mongoose.Schema({
  /*eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12
  },
  bacon: {
    type: Number,
    required: [true, 'Why no bacon?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea'],
    required: function () {
      return this.bacon > 3;
    }
  },*/
  //self defined validator rules(boolean)
  age: {
    type: Number,
    validate: {
      //validator是真正进行验证的函数
      validator: age => age > 0 && age < 120,
      //message只在validator验证失败时被调用
      message: props => `Your age: ${props.value} is not allowed`
    },
    required: [true, 'You need to give us your age']
  },
  //self defined validator rules(Promise)
  name: {
    type: String,
    validate: {
      validator: name => {
        if (name.length > 10) return Promise.reject('your name is too long')
        else if (name.length < 3) return Promise.reject('your name is too short')
        return Promise.resolve()
      }
    }
  }
})

const BreakfastModel = mongoose.model('Breakfast', BreakfastSchema) //breakfasts表
module.exports = BreakfastModel
