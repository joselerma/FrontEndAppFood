import React from "react";
import { Link } from "react-router-dom";
import "../styles/Barra.css";
import "../styles/SortAZ.css";
import logo from "../images/henry_Logo.png";

const Recipes = ({ recipes2, handlClick }) => {
  return (
    <div>
      {recipes2 &&
        recipes2.map((elem) => (
          <div key={elem.id} className="recipes">
            <Link to={`/recipes/${elem.id}`} className="noLink2">
              <img
                src={elem.image == "logo" ? logo : elem.image}
                className="images"
              />
              <h3>{elem.title}</h3>
            </Link>

            <h4 className="card-sin-espacios">
              Types: {!elem.diets.length && " No types"}{" "}
            </h4>
            <div className="ordenarTipos">
              {elem.diets.length > 0 &&
                elem.diets.map((diet) => (
                  <p className="abajo card-sin-espacios">
                    <h4
                      className="separate"
                      onClick={() => handlClick(diet.name ? diet.name : diet)}
                    >
                      {diet.name ? diet.name : diet}
                    </h4>
                  </p>
                ))}
            </div>

            <h4 className="card-sin-espacios">
              Score :{elem.spoonacularScore}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default Recipes;
