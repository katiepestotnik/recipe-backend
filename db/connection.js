require('dotenv').config()
const mongoose = require('mongoose')

//======DB CONNECTION=======
//strictQuery to true means only fields that are specified in your Schema will be save to db
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, ()=>{
    console.log('DB connected')
})
module.exports = mongoose