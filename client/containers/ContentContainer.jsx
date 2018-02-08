import React, { Component } from 'react';
// import child components...
import RecipeCreator from '../components/RecipeCreator.jsx'
import RecipeList from '../components/RecipeList.jsx'
import EditCard from '../components/EditCard.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, amber500, cyan500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  // palette: {
  //   primary1Color: orange500,
  // }
})

class ContentContainer extends Component {
  constructor(){
    super();

    this.state={
      recipeList: [],
    };

    this.dbList; // So that when I click 'starred only', I can go back.
    this.starOn = false; // Initially, the list is not filtered by stars.

    this.populateRecipes = this.populateRecipes.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.addCard = this.addCard.bind(this);
    this.editCard = this.editCard.bind(this);
    this.likeRecipe = this.likeRecipe.bind(this);
    this.viewStarred = this.viewStarred.bind(this);
  }

  populateRecipes(data){
    const stateCopy = {};
    stateCopy.recipeList = data;
    this.dbList = data; // So that 'starred only' can be undone.
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
      url: 'http://localhost:3000/homepage',
      data: data,
      success: this.populateRecipes
    })
  }

  editCard(data){
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:3000/',
      data: data,
      success: this.populateRecipes
    })

  }

  likeRecipe(id){
    // Send a put request to update the "liked" property
    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/' + id,
      success: this.populateRecipes
    })
    // On success, come back here and change the display
  }

  viewStarred(){
    if (this.starOn === false) {
      this.starOn = true;
      let recipesArr = this.state.recipeList.slice();
      recipesArr = recipesArr.filter((recipe) => {
        return recipe.liked;
      })
      this.setState({ recipeList: recipesArr});
    } else {
      this.starOn = false;
      this.setState({recipeList: this.dbList});
    }
  }

  render() {
    let editCard;
  
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="mainWrapper">
          {/* <EditCard/> */}
          <RaisedButton 
            label="Starred Only"
            style={{display:'block', width:180, margin:'auto', marginTop:20, backgroundColor:amber500}}
            onClick={() => this.viewStarred()}/>
          <RecipeList
            recipeList={this.state.recipeList}
            populateRecipes={this.populateRecipes}
            deleteCard={this.deleteCard}
            likeRecipe={this.likeRecipe}/>
          <RecipeCreator
            addCard={this.addCard}
            onChange={this.handleChange}
            recipeList={this.state.recipeList}/>
          <EditCard
            addCard={this.addCard}
            onChange={this.handleChange}
            recipeList={this.state.recipeList}
            editCard={this.editCard}/>            
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ContentContainer;


