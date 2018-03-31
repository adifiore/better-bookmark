const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const CardController = require('./database/CardController');
const Card = require('./database/CardModel');

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

// load main page
app.get('/', (req,res) => res.sendFile(__dirname + '/views/index.html'));
app.get('/styles.css', (req,res) => res.sendFile(__dirname + '/views/styles.css'));
app.get('/main.js', (req,res) => res.sendFile(__dirname + '/main.js'));
app.get('/dist/bundle.js', (req,res) => res.sendFile(__dirname + '/dist/bundle.js'));

// Get all Cards (to load them or check them)
app.get('/Cards', CardController.getAllCards);

// Create a Card in the database
app.post('/',
  CardController.createCard,
  CardController.getAllCards);

// 'Like' a Card in the database
app.put('/:id',
  CardController.likeCard,
  CardController.getAllCards);

// Update a Card in the database

app.patch('/',
  CardController.editCard,
  CardController.getAllCards);

// Delete a Card from the database
app.delete('/:id',
  CardController.deleteCard,
  CardController.getAllCards);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
