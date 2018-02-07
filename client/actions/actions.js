import * as types from '../constants/actionTypes'

export const addRecipe = (recipeName) => ({
  type: types.ADD_RECIPE,
  payload: recipeName,
});

export const likeRecipe = (recipeName) => ({
  type: types.LIKE_RECIPE,
  payload: recipeName,
});

export const addComment = (recipeName) => ({
  type: types.ADD_COMMENT,
  payload: recipeName,
});

export const deleteCard = (recipeName) => ({
  type: types.DELETE_RECIPE,
  payload: recipeName,
});

export const getAllRecipes = (recipeList) => ({
  type: types.DELETE_RECIPE,
  payload: recipeList,
});