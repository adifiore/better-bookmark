import React from 'react';

const RecipeCreator = props => (
  <div>
    <p><strong>Add New Recipe</strong></p>
    <label>Name: </label>
    <input id="nameInput" />
    <button onClick={() => {props.addMarket(document.getElementById('inputId').value); document.getElementById('nameInput').value = ''; }}>Submit Recipe</button>
  </div>
);

export default RecipeCreator;