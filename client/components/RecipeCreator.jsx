import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500, amber500, cyan500} from 'material-ui/styles/colors';

// Right now, this component has props.recipeList and props.addCard
const RecipeCreator = props => (
  <Paper style={{backgroundColor: orange500, height:300, textAlign: 'center'}}>
    <p id="creatorTitle" style={{fontSize:40, paddingTop:40}}>Add New Recipe</p>

    <TextField
      id="nameInput"
      hintText="Recipe Name"
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <TextField
      id="categoryInput"
      hintText="Category"
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <TextField
      id="URLInput"
      hintText="Paste URL"
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <TextField
      id="notesInput"
      hintText="Add some notes!"
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />

    <RaisedButton 
      label="ADD TO MY COOKBOOK"
      style={{display:'block', width:600, margin:'auto', marginTop:20}}
      onClick={() => props.addCard({
        name: document.getElementById('nameInput').value,
        category: document.getElementById('categoryInput').value,
        url: document.getElementById('URLInput').value,
        notes: document.getElementById('notesInput').value,
      })}/>
  </Paper>
);

export default RecipeCreator;


// This didn't work with react, because the "action" property automatically redirected to root
{/* <form method="POST" action="/">
  <label>Name: <input type="text" name="recipeName" onChange={props.handleChange} /></label>
  <label>Category: <input type="text" name="category" onChange={props.handleChange} /></label>
  <label>URL: <input type="text" name="url" onChange={props.handleChange} /></label>
  <label>Notes: <input type="text" name="notes" onChange={props.handleChange} /></label>
  <input type="submit" value="Submit"/>
</form> */}