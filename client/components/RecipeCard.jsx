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
// import Card from 'material-ui/Card';
// import CardTitle from 'material-ui/Card/CardTitle';
// import CardMedia from 'material-ui/Card/CardMedia';
// import CardHeader from 'material-ui/Card/CardHeader';
// import CardText from 'material-ui/Card/CardText';
// import CardExpandable from 'material-ui/Card/CardExpandable';
import {orange500} from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 300,
  margin: 20,
  backgroundColor: '#F44336',
  textAlign: 'center',
  display: 'inline-block',
}

const RecipeCard = props => {
  let image;
  if (props.liked === true){
    image = <img id="filledStar" onClick={() => {props.likeRecipe(props.id)}} src="http://simpleicon.com/wp-content/uploads/star.png" width="60"/>
  } else {
    image = <img id="star" onClick={() => {props.likeRecipe(props.id)}} src="https://png.icons8.com/metro/1600/star.png" width="60"/>
  }

  return (
    <Paper style={style} zDepth={2}>
      <p id="recipeTitle">{props.recipeList[props.index].name}</p>
      {/* <p className="recipeName">{props.recipeList[props.index].name}</p> */}
      <p><label>Category: </label>{props.recipeList[props.index].category}</p>
      <p><a href={props.recipeList[props.index].url}>Click to View Recipe</a></p>
      {/* <p><label>Did you like it? </label>{props.recipeList[props.index].liked}</p> */}
      {/* <p><label>Notes: </label>{props.recipeList[props.index].notes}</p> */}

      {image}

      <button onClick={() => props.deleteCard(props.id)}>remove from cookbook</button>
      {/* <button onClick={() => props.likeRecipe(props.id)}>I LIKED IT</button> */}
      {/* <button onClick={() => props.editRecipe(props.id)}>edit notes</button> */}
    </Paper>
    )
} 

export default RecipeCard;