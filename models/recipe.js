const {Schema, model} = require('mongoose')
//possibly change prepTime to Mixed
//prepTime: {}
const RecipeSchema = new Schema({
    name: {type: String, required: true},
    rating: {type: Number, min:0, max:5},
    servings: Number,
    prepTime: String,
    description: String,
    madeMyself: Boolean,
    notes: String,
    ingredients: [],
    instructions: []
})
const Recipe = model('Recipe', RecipeSchema)

module.exports = Recipe