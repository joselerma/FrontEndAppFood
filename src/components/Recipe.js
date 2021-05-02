import React, { useState } from "react";
import { connect } from "react-redux";
import { bringTypes, showRecipeDetails } from "../actions/index";
import { Link } from "react-router-dom";
import logo from "../images/henry_Logo.png";
import "../styles/Recipe.css";
import "../styles/Home.css";

const Recipe = ({ recipe, recipeDetails, showRecipeDetails, bringTypes }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showLocal, setShowLocal] = useState(false);
  const handleClick = () => {
    if (recipe[0].image === "logo") {
      setShowLocal(true);
      setShowDetails(true);
    } else {
      showRecipeDetails(recipe[0].id);
      setShowDetails(true);
    }
  };

  const sendCreateRecipe = () => {
    bringTypes();
  };

  return (
    <div className="reCipe">
      {!showDetails && (
        <div className="ordenarRecipe">
          <img
            src={recipe[0].image == "logo" ? logo : recipe[0].image}
            className="imagesRecipe atBottom"
          />
          <h2 className="atBottom">{recipe[0].title}</h2>
          <input
            type="button"
            value="Show Details"
            className="button"
            onClick={handleClick}
          />
        </div>
      )}
      {showDetails && !showLocal && (
        <div className="flex-wrap">
          <img src={recipe[0].image} className="imagesRecipe" />
          <h1>{recipe[0].title}</h1>
          <h3>Servings: {recipe[0].servings}</h3>
          <h3>Ready in: {recipe[0].readyInMinutes} minutes</h3>
          <h3>Health Score:{recipe[0].healthScore} </h3>
          <h3>Recipe Score: {recipe[0].spoonacularScore}</h3>
          <div className="flex">
            {recipe[0].dishTypes &&
              recipe[0].dishTypes.length > 0 &&
              recipe[0].dishTypes.map((elem, ind) => (
                <div className="flex">
                  {ind === 0 && <h3>Dish Types: </h3>}
                  <h3>{elem}</h3>
                </div>
              ))}
          </div>
          <div className="flex">
            {recipe[0].cuisines &&
              recipe[0].cuisines.length > 0 &&
              recipe[0].cuisines.map((elem, ind) => (
                <div className="flex">
                  {ind === 0 && <h3>Cuisines: </h3>}
                  <h3>{elem}</h3>
                </div>
              ))}
          </div>
          <div className="flex">
            {recipe[0].diets &&
              recipe[0].diets.length > 0 &&
              recipe[0].diets.map((elem, ind) => (
                <div className="flex">
                  {ind === 0 && <h3>Diets Types: </h3>}
                  <h3>{elem}</h3>
                </div>
              ))}
          </div>
          <div>
            {recipeDetails &&
              recipeDetails.length > 0 &&
              recipeDetails.map((elem, ind) => (
                <div>
                  <h2>Step: {elem.number}</h2>
                  <div className="flex">
                    {elem.equipment && elem.equipment.length > 0 && (
                      <h3>Equipment to this step: </h3>
                    )}
                    {elem.equipment &&
                      elem.equipment.length > 0 &&
                      elem.equipment.map((equipment) => (
                        <h3>{equipment.name}</h3>
                      ))}
                  </div>
                  <div className="flex">
                    {elem.ingredients && elem.ingredients.length > 0 && (
                      <h3>Ingredients to this step: </h3>
                    )}
                    {elem.ingredients &&
                      elem.ingredients.length > 0 &&
                      elem.ingredients.map((ingredient) => (
                        <h3>{ingredient.name}</h3>
                      ))}
                  </div>
                  <h3> Instructions: {elem.step} </h3>
                </div>
              ))}
          </div>
          <Link to="/Home">
            <input
              type="button"
              value="Go Home!"
              className="button align separar"
            />
          </Link>
          <Link to="/createRecipe">
            <input
              type="button"
              value="Create Recipe"
              className="button align separar"
              onClick={sendCreateRecipe}
            />
          </Link>
        </div>
      )}
      {showDetails && showLocal && (
        <div className="flex-wrap">
          <img src={logo} className="imagesRecipe" />
          <h1>{recipe[0].title}</h1>
          <h3>Health Score:{recipe[0].healthScore} </h3>
          <h3>Recipe Score: {recipe[0].spoonacularScore}</h3>
          <div className="flex">
            {recipe[0].diets &&
              recipe[0].diets.length > 0 &&
              recipe[0].diets.map((elem, ind) => (
                <div className="flex">
                  {ind === 0 && <h3>Diets Types: </h3>}
                  <h3>{elem.name}</h3>
                </div>
              ))}
          </div>
          <h3>Resume:{recipe[0].ingredients}</h3>
          <h3>Instructions:{recipe[0].steps}</h3>
          <Link to="/Home">
            <input
              type="button"
              value="Go Home!"
              className="button align separar"
            />
          </Link>
          <Link to="/createRecipe">
            <input
              type="button"
              value="Create Recipe"
              className="button align separar"
              onClick={sendCreateRecipe}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return { recipeDetails: state.recipeDetails };
}
function mapDispatchToProps(dispatch) {
  return {
    showRecipeDetails: (recipeId) => dispatch(showRecipeDetails(recipeId)),
    bringTypes: () => dispatch(bringTypes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
