import React, { Component } from 'react';
// import child components...
import RecipeCreator from '../components/RecipeCreator.jsx'
import RecipeList from '../components/RecipeList.jsx'

class ContentContainer extends Component {
  constructor(){
    super();

    this.state={
      recipeList: [],
    };

    this.populateRecipes = this.populateRecipes.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.addCard = this.addCard.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.likeRecipe = this.likeRecipe.bind(this);
  }

  populateRecipes(data){
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

  editRecipe(id){
    console.log("Now you gon' EDIT RECIPE AT ID: " + id);
    // 
  }

  likeRecipe(id){
    console.log('YOU LIKED RECIPE ID: ' +id);
    
  }

  render() {
    return(
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
    );
  }
}
export default ContentContainer;


