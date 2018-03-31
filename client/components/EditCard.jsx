import React, { Component } from 'react';
import CardCard from './CardCard.jsx'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500, amber500, cyan500, red500} from 'material-ui/styles/colors';

const EditCard = props => (
  <Paper style={{backgroundColor: amber500, height:500, textAlign: 'center', width:'50%', display:'inline-block'}}>
    <p id="creatorTitle" style={{fontSize:40, paddingTop:40}}>Edit A Card</p>

    <TextField
      id="nameInputEdit"
      hintText="Card Name"
      style={{width:'80%'}}
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <br/>
    <TextField
      id="categoryInputEdit"
      hintText="New Category"
      style={{width:'80%'}}
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <br/>
    <TextField
      id="URLInputEdit"
      hintText="New URL"
      style={{width:'80%'}}
      underlineStyle={{borderColor: cyan500}}
      underlineFocusStyle={{borderColor: amber500}} />
    <br/>
    <TextField
      id="notesInputEdit"
      hintText="New Notes"
      style={{width:'80%'}}
      multiLine={true}
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