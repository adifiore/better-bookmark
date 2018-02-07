import { combineReducers } from 'redux';

// import all reducers here
import recipeReducer from './recipeReducer';


// // combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  recipes: recipeReducer,
});

// make the combined reducers available for import
export default reducers;