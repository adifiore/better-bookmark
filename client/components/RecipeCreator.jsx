import React from 'react';

// Right now, this component has props.recipeList and props.addCard
const RecipeCreator = props => (
  <div id="recipeCreator">
    <p id="creatorTitle"><strong>Add New Recipe</strong></p>

    <label>Name: <input type="text" name="recipeName" id="nameInput" /></label>
    <label> Category: <input type="text" name="category" id="categoryInput" /></label>
    <label> URL: <input type="text" name="url" id="URLInput"/></label>
    {/* <label>Notes: <input type="text" name="notes" id="notesInput" /></label> */}

    <button onClick={() => props.addCard({
      name: document.getElementById('nameInput').value,
      category: document.getElementById('categoryInput').value,
      url: document.getElementById('URLInput').value,
      // notes: document.getElementById('notesInput').value,
    })}>ADD YA RECIPE</button>
  </div>
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