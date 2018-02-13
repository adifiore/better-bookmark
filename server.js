const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const recipeController = require('./database/recipeController');
const Recipe = require('./database/RecipeModel');
const userController = require('./authentication/userController.js');

const PORT = 3000;

mongoose.connect('mongodb://localhost/cookingdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Cooking Database');
});
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Authentication (not currently working)
app.get('/signup',
  function(req, res, next) {
    res.render('./signup')
  }
)

app.post('/signup',
  userController.addUser,
  function(req, res, next) {
    res.redirect('/homepage')
  }
)

app.post('/login',
  userController.verifyUser,
  function(req, res, next) {
    res.redirect('/homepage')
  }
)

// load main page
// app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));
app.use(express.static(__dirname + '/'));
app.get('/styles.css', (req,res) => res.sendFile(__dirname + '/styles.css'));
app.get('/main.js', (req,res) => res.sendFile(__dirname + '/main.js'));
app.get('/dist/bundle.js', (req,res) => res.sendFile(__dirname + '/dist/bundle.js'));

// Get all recipes (to load them or check them)
app.get('/recipes', recipeController.getAllRecipes);

// Create a recipe in the database
app.post('/',
  recipeController.createRecipe,
  recipeController.getAllRecipes);

// 'Like' a recipe in the database
app.put('/:id',
  recipeController.likeRecipe,
  recipeController.getAllRecipes);

// Update a recipe in the database

app.patch('/',
  recipeController.editRecipe,
  recipeController.getAllRecipes);

// Delete a recipe from the database
app.delete('/:id',
  recipeController.deleteRecipe,
  recipeController.getAllRecipes);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
