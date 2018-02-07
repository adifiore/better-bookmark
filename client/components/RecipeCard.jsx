import React from 'react';
// Right now, this component has:
// props.recipeList
// props.index
// props.deleteCard
// props.id
// props.name

const RecipeCard = props => (
  <div className="recipeCard">
    <p className="recipeName">{props.recipeList[props.index].name}</p>
    <p><label>Category: </label>{props.recipeList[props.index].category}</p>
    <p><label>Link: </label><a href={props.recipeList[props.index].link}>Click to View Recipe</a></p>
    {/* <p><label>How was it? </label>{props.recipeList[props.index].liked}</p> */}
    <p><label>Notes: </label>{props.recipeList[props.index].notes}</p>
    <button onClick={() => props.deleteCard(props.id)}>remove from cookbook</button>
  </div>
)

export default RecipeCard;