import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Platform, Image, Text, View, ScrollView, FlatList } from 'react-native';
import firebase from 'react-native-firebase';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {recipesReducer, loadRecipes} from './api/recipes';
import Recipes from './components/Recipes';

// Reducer
const appReducer = (state = {loggedIn: true}, action) => {
  switch (action.type) {
    default:
      return state
  }
};

// Store
const store = createStore(combineReducers({
  app: appReducer,
  recipes: recipesReducer
}), applyMiddleware(thunk));

// Load recipes
store.dispatch(loadRecipes());

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Recipes />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:30,
    height:'100%',
  },
  recipes: {
    marginTop:50
  },
  logo: {
    height: 80,
    marginBottom: 16,
    marginTop: 32,
    width: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
