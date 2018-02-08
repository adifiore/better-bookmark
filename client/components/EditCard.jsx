import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500, amber500, cyan500, red500} from 'material-ui/styles/colors';

const EditCard = props => (
  <Paper style={{backgroundColor: red500, height:300, textAlign: 'center'}}>
    <p id="creatorTitle" style={{fontSize:40, paddingTop:40}}>Edit A Recipe</p>

    <TextField
      id="nameInputEdit"
      hintText="Recipe Name"
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <TextField
      id="categoryInputEdit"
      hintText="New Category"
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <TextField
      id="URLInputEdit"
      hintText="New URL"
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <TextField
      id="notesInputEdit"
      hintText="New Notes"
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />

    <RaisedButton 
      label="SUBMIT CHANGES"
      style={{display:'block', width:600, margin:'auto', marginTop:20}}
      onClick={() => props.editCard({
        name: document.getElementById('nameInputEdit').value,
        category: document.getElementById('categoryInputEdit').value,
        url: document.getElementById('URLInputEdit').value,
        notes: document.getElementById('notesInputEdit').value,
      })}/>
  </Paper>
);
export default EditCard;