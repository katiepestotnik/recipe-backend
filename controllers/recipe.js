const Recipe = require('../models/recipe')
const express = require('express')
const router = express.Router()

//INDEX
router.get('/', async(req, res)=>{
    try{
        res.status(200).json(await Recipe.find({}))
    } catch (err){
        res.status(400).json({err})
    }
})
//DELETE
//UPDATE
//CREATE
//SHOW



module.exports = router