import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {orange500} from 'material-ui/styles/colors'
import {deepOrange500} from 'material-ui/styles/colors'


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: deepOrange500
  }
})

class RecipeList extends Component {
  constructor(props){
    super(props);
    // Right now, this component has:
    // this.props.recipeList
    // this.props.populateRecipes
    // this.props.deleteCard
    // this.props.editRecipe
  }

  componentDidMount() {
    if (this.props.recipeList.length===0) {
      $.ajax({
        url: 'http://localhost:3000/recipes',
        success: this.props.populateRecipes
      })
    }
  }

  render() {
    let recipeCardArr = [];
    for (let i = 0; i < this.props.recipeList.length; i++) {
      recipeCardArr.push(<RecipeCard key={i} index={i} id={this.props.recipeList[i]._id} name={this.props.recipeList[i].name} liked={this.props.recipeList[i].liked} notes={this.props.recipeList[i].notes} recipeList={this.props.recipeList} deleteCard={this.props.deleteCard} likeRecipe={this.props.likeRecipe} editCard={this.props.editCard}/>)
    }

    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="recipeList" style={{textAlign: "center"}}>
          {recipeCardArr}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default RecipeList;