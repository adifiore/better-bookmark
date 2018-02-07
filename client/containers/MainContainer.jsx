import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import from child components...
import ContentContainer from './ContentContainer.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = store => {
  return {
    totalRecipes : store.recipes.totalRecipes,
    recipeList: store.recipes.recipeList,
  };
  // can also just say {recipes: store.recipes};
};

const mapDispatchToProps = dispatch => ({
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="mainContainer">
        {/* <div id="title">Cookbook</div> */}
        <ContentContainer totalRecipes={this.props.totalRecipes} recipeList={this.props.recipeList}/>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);