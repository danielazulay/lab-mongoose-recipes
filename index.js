const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(async(db) => {
    // Run your code here, after you have insured that the connection was made
const recipe = await Recipe.create({

  title:'tomator soup',
  level : 'Easy Peasy',
  ingredients :["water","salt", "tomator"],
  cuisine: "American",
  dishType :"soup",
  image :"https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg",
  duration :30,
  creator :"daniel",

})


const response= await Recipe.insertMany(data)

const restore= await Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"},
  { $set: { duration: 100 } }, { new: true }  )

  const del= await Recipe.deleteOne({title:"Carrot Cake"} )
  console.log("create many",response);  
  console.log("update one",restore);  
console.log("del====>",del);  

conexao.close()
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
