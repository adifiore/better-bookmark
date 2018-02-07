import React from 'react';

// Right now, this component has this.props.recipeList
const RecipeCreator = props => (
  <div>
    <p><strong>Add New Recipe</strong></p>

    <form method="POST" action="/">
      <label>Name: <input type="text" name="recipeName" /></label>
      <label>Category: <input type="text" name="category" /></label>
      <label>URL: <input type="text" name="url" /></label>
      <label>Notes: <input type="text" name="notes" /></label>
      <input type="submit" value="Submit"/>
    </form>

  </div>
);

export default RecipeCreator;