// import React from 'react';
import React, { Component } from 'react';

class RecipeList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if (this.props.recipeList.length===0) {
      // console.log(Array.isArray(this.props.recipeList));
      // console.log(this.props.recipeList + 'initial recipe list')
      $.ajax({
        url: 'http://localhost:3000/recipes',
        success: this.populateRecipes
      })
    }
  }

  populateRecipes(data){
    // I want this function to dispatch a getAllRecipes action that will update the recipeList to include the data returned from the call.
    
  }

  render() {
    return(
      <div className="recipeCard">
        <p><label>Name: </label>{}</p>
        <p><label>Link: </label><span>{}</span></p>
        <p><label>Category: </label><span>{}</span></p>
        <p><label>Tried it? </label><span>{}</span></p>
      </div>
    );
  }
// const RecipeList = (props) => (
  // <div className="recipeCard">
  //   <p><label>Name: </label>{}</p>
  //   <p><label>Link: </label><span>{}</span></p>
  //   <p><label>Category: </label><span>{}</span></p>
  //   <p><label>Tried it? </label><span>{}</span></p>
  // </div>
// );
}
export default RecipeList;