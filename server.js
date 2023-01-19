require('dotenv').config()

//=======DEPENDENCIES===========
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
//======Exports=====
const PORT = process.env.PORT
const mongoose = require("./db/connection")
const Router = require('./controllers/recipe')
//======MIDDLEWARE=======
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())


//HOME
app.get('/', (req, res)=>{
    res.send('HOME ROUTE')
})
//ROUTES
app.use('/recipe', Router)

//====LISTENER======
app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})
