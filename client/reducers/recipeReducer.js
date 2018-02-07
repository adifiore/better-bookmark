import * as types from '../constants/actionTypes';

const initialState = {
  totalRecipes: 0,
  recipeList: [],
};

const recipeReducer = (state=initialState, action) => {
  let recipeList;

  switch(action.type) {
    case types.ADD_RECIPE:
      //ES6 version: instead of copying state, just return a copy with a spread operator and the updated keys
      // return {
      //   ...state,
      //   marketList,
      //   lastMarketId,
      //   totalMarkets,
      //   newLocation: '',
      // };  

    case types.LIKE_RECIPE:
    case types.ADD_COMMENT:
    case types.DELETE_RECIPE:
    
    default:
      return state;
  }
};

export default recipeReducer;
