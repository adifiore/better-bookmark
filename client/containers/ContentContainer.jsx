import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components...
import RecipeCreator from '../components/RecipeCreator.jsx'
import RecipeList from '../components/RecipeList.jsx'


const mapStateToProps = store => ({
});
const mapDispatchToProps = actions;

class ContentContainer extends Component {
  constructor(props){
    super(props);
  }

  // componentDidMount() {
  //   if (this.props.recipeList.length===0) {
  //     $.ajax({
  //       url: 'http://localhost:3000/recipes',
  //       success: populateRecipes
  //     })
  //   }
  //   function populateRecipes(data){
  //     // console.log(data);
  //     // for (let i=0; i < data.length; i++){
  //     //   $('#recipesContainer').append('<div class="recipeCard">A Recipe!</div>')
  //     // }
  //   }
  // }

  render() {
    return(
      <div>
        <RecipeList
          class="recipeList"
          totalRecipes={this.props.totalRecipes}
          getAllRecipes={this.props.getAllRecipes}
          recipeList={this.props.recipeList}/>
        <RecipeCreator totalRecipes={this.props.totalRecipes} recipeList={this.props.recipeList}/>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);


