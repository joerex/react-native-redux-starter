import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
import PropTypes from 'prop-types';
import {connect, dispatch} from 'react-redux';
import {loadRecipes} from '../api/recipes';
import {Dialogflow_V2 as Dialogflow} from "react-native-dialogflow";
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem, Header } from 'react-native-elements'

const RecipesComponent = (props) => {
  const {loadingRecipes, recipes} = props;

  Dialogflow.setConfiguration("ya29.c.El-4Beo_3MfR7-B4rD9yv1Jj4TbV4tUniKPqYIOCdrcCdIB5HKhVOBWDhvntYPpAxhTv0abpP_H72iOThEF_VTWRpB46AwhM3LuNanYk3BxmuyN2ermBfUjel4MjpC_bEw", Dialogflow.LANG_ENGLISH, 'chef-ab805');

  return (
    <View style={styles.container}>
      { loadingRecipes &&
        <Text>Loading Recipes...</Text>
      }

      { !loadingRecipes &&
        <React.Fragment>
          <View style={styles.main}>
            <Header
              outerContainerStyles={{
                backgroundColor: 'transparent',
                borderBottomColor: 'transparent',
              }}
              leftComponent={{ icon: 'menu', color: '#000' }}
              centerComponent={{ text: 'Recipes', style: { color: '#000', fontSize: 20 } }}
              rightComponent={{ icon: 'home', color: '#000' }}
            />
            <ScrollView>
              <List containerStyle={{marginBottom: 20}}>
                {
                  recipes.map((l, i) => (
                    <ListItem
                      key={i}
                      title={l.recipe.name}
                    />
                  ))
                }
              </List>
            </ScrollView>
          </View>

          <View style={styles.footer}>
            <TouchableWithoutFeedback
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}>

              <View style={styles.button} >
                <Animated.View style={styles.bgFill} />
                <Icon name="microphone" size={30} color="#fff" style={{marginBottom: 10}} />
                <Text style={styles.text}>Press And Hold While Speaking</Text>
              </View>

            </TouchableWithoutFeedback>
          </View>
        </React.Fragment>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    flex: 1,
    justifyContent: 'space-between'
  },
  main: {
    flex: -1,
    height:'70%',
  },
  list: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-between'
  },
  button: {
    flex:-1,
    width:'100%',
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
    textAlign: 'center',
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

const handlePressIn = () => {
  console.log('Pressed');

  Dialogflow.startListening(result=>{
    console.log(result);
    Dialogflow.subscription.remove();
  }, error=>{
    console.log(error);
  }, partial=> {
    console.log(partial);
  });
  /*
  Animated.timing(this.state.pressAction, {
    duration: ACTION_TIMER,
    toValue: 1
  }).start(this.animationActionComplete);
  */
};

const handlePressOut = () => {
  console.log('Unpressed');

  Dialogflow.finishListening();
  /*
  Animated.timing(this.state.pressAction, {
    duration: this._value * ACTION_TIMER,
    toValue: 0
  }).start();
  */
};

RecipesComponent.propTypes = {
  loadingRecipes: PropTypes.bool,
  recipes: PropTypes.array,
  onAddRecipe: PropTypes.func
};

const mapStateToProps = state => {
  return {
    loadingRecipes: state.recipes.loadingRecipes,
    recipes: Object.keys(state.recipes.recipes).map((key) => {
      return {key, recipe: state.recipes.recipes[key]}
    })
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddRecipe: (event) => {
      //loadRecipes(dispatch, event.target)
    }
  }
};

const Recipes = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesComponent);

export default Recipes;