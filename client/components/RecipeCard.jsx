import React from 'react';
// Right now, this component has:
// props.recipeList
// props.index
// props.deleteCard
// props.id
// props.name
// props.editRecipe
// props.likeRecipe
// props.liked





const RecipeCard = props => {
  let image;
  if (props.liked === true){
    image = <img id="filledStar" onClick={() => {props.likeRecipe(props.id)}} src="http://simpleicon.com/wp-content/uploads/star.png" width="40"/>
  } else {
    image = <img id="star" onClick={() => {props.likeRecipe(props.id)}} src="https://png.icons8.com/metro/1600/star.png" width="40"/>
  }

  return (
    <div className="recipeCard">
      <p className="recipeName">{props.recipeList[props.index].name}</p>
      <p><label>Category: </label>{props.recipeList[props.index].category}</p>
      <p><label>Link: </label><a href={props.recipeList[props.index].url}>Click to View Recipe</a></p>
      {/* <p><label>Did you like it? </label>{props.recipeList[props.index].liked}</p> */}
      {/* <p><label>Notes: </label>{props.recipeList[props.index].notes}</p> */}

      {image}

      <button onClick={() => props.deleteCard(props.id)}>remove from cookbook</button>
      {/* <button onClick={() => props.likeRecipe(props.id)}>I LIKED IT</button> */}
      {/* <button onClick={() => props.editRecipe(props.id)}>edit notes</button> */}
    </div>
    )
} 

export default RecipeCard;