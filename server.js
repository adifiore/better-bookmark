const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const recipeController = require('./database/recipeController');
const Recipe = require('./database/RecipeModel')

const PORT = 3000;

mongoose.connect('mongodb://localhost/cookingdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Cooking Database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// load main page
app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));
app.get('/styles.css', (req,res) => res.sendFile(__dirname + '/styles.css'));
app.get('/main.js', (req,res) => res.sendFile(__dirname + '/main.js'));
app.get('/dist/bundle.js', (req,res) => res.sendFile(__dirname + '/dist/bundle.js'));


// Create a recipe in the database
app.post('/', recipeController.createRecipe);

// Get all recipes (to load them or check them)
app.get('/recipes', recipeController.getAllRecipes);

// Delete a recipe from the database
app.delete('/:id', recipeController.deleteRecipe, recipeController.getAllRecipes);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
