const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const cat = require('./router/cat')

mongoose.connect('mongodb://localhost:27017/mongoose_study', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    //handle initial connection errors
    .catch(error => {
      console.error('database initial connect error!!!!')
    })

const conn = mongoose.connection

//allow across origin
app.use(cors({
  origin: true,
  credentials: true
}))

//parse application/json
app.use(bodyParser.json())
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//use router
app.use('/cat', cat)


//handle errors after initial connection was established
conn.on('connected', () => {
  console.log('database connect success')

  const port = 5400
  app.listen(port, () => {
    console.log(`app is running at port ${port}`)
  })
})
