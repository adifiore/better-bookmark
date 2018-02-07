import React, { Component } from 'react';
// import child components...
import RecipeCreator from '../components/RecipeCreator.jsx'
import RecipeList from '../components/RecipeList.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {orange500} from 'material-ui/styles/colors'
import {deepOrange500} from 'material-ui/styles/colors'


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: deepOrange500
  }
})

class ContentContainer extends Component {
  constructor(){
    super();

    this.state={
      recipeList: [],
    };

    this.populateRecipes = this.populateRecipes.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.addCard = this.addCard.bind(this);
    // this.editRecipe = this.editRecipe.bind(this);
    this.likeRecipe = this.likeRecipe.bind(this);
  }

  populateRecipes(data){
    console.log(data);
    let stateCopy = {};
    stateCopy.recipeList = data;
    this.setState({ recipeList: stateCopy.recipeList });
  }

  deleteCard(id){
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3000/' + id,
      success: this.populateRecipes //reset state
    })
  }

  addCard(data){
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000',
      data: data,
      success: this.populateRecipes
    })
  }

  // editRecipe(id){
  //   console.log("Now you gon' EDIT RECIPE AT ID: " + id);
  // }

  likeRecipe(id){
    // Send a put request to update the "liked" property
    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/' + id,
      success: this.populateRecipes
    })
    // On success, come back here and change the display
    // That might not work for reloading, so maybe the display needs to depend on the property.
  }

  render() {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <RecipeList
            recipeList={this.state.recipeList}
            populateRecipes={this.populateRecipes}
            deleteCard={this.deleteCard}
            likeRecipe={this.likeRecipe}
            editRecipe={this.editRecipe}/>
          <RecipeCreator
            addCard={this.addCard}
            onChange={this.handleChange}
            recipeList={this.state.recipeList}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ContentContainer;


