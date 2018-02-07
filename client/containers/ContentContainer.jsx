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
    this.addCard = this.addCard.bind(this)
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
    console.log(data);
  }

  render() {
    return(
      <div>
        <RecipeList
          recipeList={this.state.recipeList}
          populateRecipes={this.populateRecipes}
          deleteCard={this.deleteCard}/>
        <RecipeCreator
          recipeList={this.state.recipeList}/>
      </div>
    );
  }
}
export default ContentContainer;


