import React from 'react';
import firebase from 'react-native-firebase';

export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const REQUEST_RECIPES_FAILED = 'REQUEST_RECIPES_FAILED';

export const loadRecipes = () => {
  return dispatch => {
    dispatch(requestRecipes());
    console.log('Requesting recipes');
    return firebase.database().ref('recipes').on('value', data => {
      console.log('Recipes', data);
      dispatch(receiveRecipes(data));
    });
  }
};

export const requestRecipes = () => {
  return {type: REQUEST_RECIPES}
};

export const receiveRecipes = (data) => {
  return {
    type: RECEIVE_RECIPES,
    payload: data
  }
};

export const requestRecipesFailed = (error) => {
  return {
    type: REQUEST_RECIPES_FAILED,
    payload: error
  }
};

export const recipesReducer = (state = {loadingRecipes: false, recipes: {}}, action) => {
  switch(action.type) {
    case REQUEST_RECIPES:
      return {...state, loadingRecipes: true};
    case RECEIVE_RECIPES:
      return {...state, loadingRecipes: false, recipes: action.payload.val()};
    case REQUEST_RECIPES_FAILED:
      return {...state, loadingRecipes: false};
    default:
      return state;
  }
};