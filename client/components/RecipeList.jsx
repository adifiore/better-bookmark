import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx'

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
      recipeCardArr.push(<RecipeCard key={i} index={i} id={this.props.recipeList[i]._id} name={this.props.recipeList[i].name} recipeList={this.props.recipeList} deleteCard={this.props.deleteCard} likeRecipe={this.props.likeRecipe} editRecipe={this.props.editRecipe}/>)
    }

    return(
      <div className="recipeList">
        {recipeCardArr}
      </div>
    );
  }
}
export default RecipeList;