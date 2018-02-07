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
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500, amber500, cyan500} from 'material-ui/styles/colors';

const style = {
  height: 350,
  width: 350,
  margin: 20,
  backgroundColor: '#F44336',
  textAlign: 'center',
  display: 'inline-block',
  verticalAlign: 'top'
}

const RecipeCard = props => {
  let image;
  if (props.liked === true){
    image = <img id="filledStar" onClick={() => {props.likeRecipe(props.id)}} src="http://simpleicon.com/wp-content/uploads/star.png" width="60"/>
  } else {
    image = <img id="star" onClick={() => {props.likeRecipe(props.id)}} src="https://png.icons8.com/metro/1600/star.png" width="60"/>
  }

  return (
    <Paper style={style} zDepth={3}>
      <p id="recipeTitle">{props.recipeList[props.index].name}</p>
      {/* <p className="recipeName">{props.recipeList[props.index].name}</p> */}
      <p><label>Category: </label>{props.recipeList[props.index].category}</p>
      <p><a href={props.recipeList[props.index].url}>Click to View Recipe</a></p>
      {/* <p><label>Did you like it? </label>{props.recipeList[props.index].liked}</p> */}
      {/* <p><label>Notes: </label>{props.recipeList[props.index].notes}</p> */}

      {image}
    
      <RaisedButton
        label="remove"
        style={{display:'block', width:120, margin:'auto', marginTop:20, backgroundColor:amber500}}
        onClick={() => props.deleteCard(props.id)}/>
      {/* <button onClick={() => props.deleteCard(props.id)}>remove from cookbook</button> */}
      {/* <button onClick={() => props.likeRecipe(props.id)}>I LIKED IT</button> */}
      {/* <button onClick={() => props.editRecipe(props.id)}>edit notes</button> */}
    </Paper>
    )
} 

export default RecipeCard;