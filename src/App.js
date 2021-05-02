import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from './components/LandingPage'
import Recipe from './components/Recipe';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import './App.css';



function App(props) {
  return (
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route  exact path ='/home' component ={Home} />
      <Route
         exact path='/recipes/:recipesId'
         render={({match}) => <Recipe
         recipe={props.recipes && props.recipes.filter(recipe=> recipe.id == match.params.recipesId)}
        />}
      />
      <Route exact path='/createRecipe' component={CreateRecipe}/>
    </React.Fragment>
  );
}
function mapStateToProps(state){
  return {recipes: state.recipes};
}


export default connect(
  mapStateToProps,
  null
)(App);
