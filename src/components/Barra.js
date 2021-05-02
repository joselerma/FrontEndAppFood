import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  consultRecipe,
  ordenarMayorMenor,
  ordenarMenorMayor,
  ordenarXScore,
  ordenarXTypo,
  bringTypes,
} from "../actions/index";
import Pagination from "./Pagination";
import "../styles/Barra.css";
import "../styles/SortAZ.css";
import Recipes from "./Recipes";

const Barra = (props) => {
  const [receta, setReceta] = useState({ search: "" });

  const handleChange = (e) => {
    setReceta({ search: e.target.value });
  };
  const [primeraConsulta, setPrimeraConsulta] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(4);

  const [showSort, setShowSort] = useState(false);
  const [ordenarAZ, setOrdenarAZ] = useState(false);
  const [ordenarZA, setOrdenarZA] = useState(false);
  const [ordenarXScore, setOrdenarXScore] = useState(false);
  const [ordenarXTypo, setOrdenarXTypo] = useState(false);

  let indexOfLastRecipe = currentPage * resultsPerPage;
  let indexOfFirstRecipe = indexOfLastRecipe - resultsPerPage;
  let currentRecipes =
    primeraConsulta && props.recipes && props.recipes.length > 2
      ? props.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
      : props.recipes;
  let currentRecipes2 =
    ordenarAZ && props.recipes && props.recipes.length > 2
      ? props.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
      : props.recipes;
  let currentRecipes3 =
    ordenarZA && props.recipes && props.recipes.length > 2
      ? props.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
      : props.recipes;
  let currentRecipes4 =
    ordenarXScore && props.recipes && props.recipes.length > 2
      ? props.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
      : props.recipes;
  let currentRecipes5 =
    ordenarXTypo && props.diets && props.diets.length > 2
      ? props.diets.slice(indexOfFirstRecipe, indexOfLastRecipe)
      : props.diets;

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrdenarAZ(false);
    setOrdenarZA(false);
    setOrdenarXScore(false);
    setOrdenarXTypo(false);
    props.consultRecipe(receta.search);
    setPrimeraConsulta(true);
    setCurrentPage(1);
    setShowSort(true);
  };

  const handleClick1 = () => {
    setPrimeraConsulta(false);
    setOrdenarZA(false);
    setOrdenarXScore(false);
    setOrdenarXTypo(false);
    props.ordenarMayorMenor();
    setOrdenarAZ(true);
    setCurrentPage(1);
  };

  const handleClick2 = () => {
    setPrimeraConsulta(false);
    setOrdenarAZ(false);
    setOrdenarXScore(false);
    setOrdenarXTypo(false);
    props.ordenarMenorMayor();
    setOrdenarZA(true);
    setCurrentPage(1);
  };

  const handleClick3 = () => {
    setPrimeraConsulta(false);
    setOrdenarAZ(false);
    setOrdenarZA(false);
    setOrdenarXTypo(false);
    props.ordenarXScore();
    setOrdenarXScore(true);
    setCurrentPage(1);
  };
  const handleClick4 = (diet) => {
    setPrimeraConsulta(false);
    setOrdenarAZ(false);
    setOrdenarZA(false);
    setOrdenarXScore(false);
    props.ordenarXTypo(diet);
    setOrdenarXTypo(true);
    setCurrentPage(1);
  };

  const sendCreateRecipe = () => {
    props.bringTypes();
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="barra">
      <div className="alinear2">
        <form onSubmit={handleSubmit}>
          <label className="label">Choose your recipe</label>
          <input
            className="btn"
            type="text"
            value={receta.search}
            onChange={handleChange}
          />
          <input className="button" name="name" type="submit" value="Search" />
          <Link to="/createRecipe">
            <input
              type="button"
              value="Create Recipe"
              className="button align separar"
              onClick={sendCreateRecipe}
            />
          </Link>
          {showSort && props.recipes.length && (
            <div>
              <input
                type="button"
                value="Sort a-Z"
                className="button align"
                onClick={handleClick1}
              />
              <input
                type="button"
                value="Sort Z-a"
                className="button align"
                onClick={handleClick2}
              />
              <input
                type="button"
                value="Sort by Score"
                className="button align"
                onClick={handleClick3}
              />
            </div>
          )}
        </form>
      </div>

      {props.recipes.length < 1 ? (
        <h2 className="alinear3 alinear white">
          No se encontraron resultados ...
        </h2>
      ) : (
        <div className="alinear3">
          <div className="alinear">
            {primeraConsulta && props.recipes && props.recipes.length > 0 && (
              <Recipes recipes2={currentRecipes} handlClick={handleClick4} />
            )}
            {ordenarAZ && props.recipes && props.recipes.length && (
              <Recipes recipes2={currentRecipes2} handlClick={handleClick4} />
            )}
            {ordenarZA && props.recipes && props.recipes.length && (
              <Recipes recipes2={currentRecipes3} handlClick={handleClick4} />
            )}
            {ordenarXScore && props.recipes && props.recipes.length && (
              <Recipes recipes2={currentRecipes4} handlClick={handleClick4} />
            )}
            {ordenarXTypo && props.diets && props.diets.length && (
              <Recipes recipes2={currentRecipes5} handlClick={handleClick4} />
            )}
          </div>
        </div>
      )}
      {props.recipes.length > 0 && (
        <div className="alinear4">
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={
              primeraConsulta &&
              props.recipes &&
              props.recipes.length > 0 &&
              props.recipes.length
            }
            paginate={paginate}
          />
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={ordenarAZ && props.recipes && props.recipes.length}
            paginate={paginate}
          />
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={ordenarZA && props.recipes && props.recipes.length}
            paginate={paginate}
          />
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={
              ordenarXScore && props.recipes && props.recipes.length
            }
            paginate={paginate}
          />
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={ordenarXTypo && props.diets && props.diets.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    diets: state.diets,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    consultRecipe: (search) => dispatch(consultRecipe(search)),
    ordenarMayorMenor: () => dispatch(ordenarMayorMenor()),
    ordenarMenorMayor: () => dispatch(ordenarMenorMayor()),
    ordenarXScore: () => dispatch(ordenarXScore()),
    ordenarXTypo: (diet) => dispatch(ordenarXTypo(diet)),
    bringTypes: () => dispatch(bringTypes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Barra);
