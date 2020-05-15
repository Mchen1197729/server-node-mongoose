## mongoose

### 0.获取Model
```js
const mongoose = require('mongoose')

mongoose.connect('mongodb:localhost:27017/mongoose_study',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(error=>{
  console.log('database initial connect error')
})

const conn = mongoose.connection
conn.on('connected',()=>{
  console.log('database connect success')
})

const TankSchema = new mongoose.Schema({
  size:String
})

const Tank = mongoose.model('Tank',TankSchema) //对应的数据表:tanks

//1.增
new Tank({size:'small'})
    .save((error,tank)=>{
      console.log(error,tank)
    })

Tank.create({size:'small'},(error,tank)=>{
  console.log(error,tank)
})

Tank.insertMany([{size:'small'},{size:'large'}],(error,tanks)=>{
  console.log(error,tanks)
})

//2.删

```

