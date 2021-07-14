const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema

  title:{type: String},
level : {type: String ,enum:["Easy Peasy","Amateur Chef","UltraPro Chef",]},
ingredients :[String],
cuisine : [String],
dishType :{type: String ,enum:["breakfast","main_course","soup","snack","drink","dessert","other"]},
image :{type :String, Default: 'https://images.media-allrecipes.com/images/75131.jpg'},
duration :{type: Number , min:0},
creator :{type: String},
created :{type :String, Default:"today"},
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
