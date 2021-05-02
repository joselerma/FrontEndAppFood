import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sendFormulario } from "../actions/index";
import "../styles/Recipe.css";
import "../styles/CreateRecipe.css";
import "../styles/Home.css";

export const CreateRecipe = ({ types, sendFormulario, hecho }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [formulario, setFormulario] = useState({
    name: "",
    resume: "",
    score: 0,
    health: 0,
    steps: "",
  });
  const [types2, setTypes2] = useState({
    glutenFree: false,
    ketogenic: false,
    vegetarian: false,
    lactoVegetarian: false,
    ovoVegetarian: false,
    vegan: false,
    pescetarian: false,
    paleo: false,
    primal: false,
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormulario([formulario, types2]);
    setMostrarFormulario(false);
  };

  const handleClick = () => {
    setMostrarFormulario(true);
  };

  return (
    <div className={mostrarFormulario ? "createRecipe" : "createRecipe2"}>
      <div className="alinearTodo">
        <h1>Create your recipe!</h1>

        {mostrarFormulario && (
          <div>
            <Link to="/Home">
              <input
                type="button"
                value="Go Home!"
                className="button align separar"
                onClick={handleClick}
              />
            </Link>
            <form className="form" onSubmit={handleSubmit}>
              <div className="alinearFormulario">
                <label>Name your recipe:</label>
                <input
                  name="name"
                  type="text"
                  className="inputCreate"
                  value={formulario.name}
                  onChange={handleChange}
                />
              </div>
              <div className="alinearFormulario">
                <label>Resume:</label>
                <textarea
                  name="resume"
                  className="alinearFormulario inputCreate"
                  cols="50"
                  rows="10"
                  value={formulario.resume}
                  onChange={handleChange}
                  placeholder="Resume:... Ingredients:.."
                />
              </div>
              <div className="alinearFormulario">
                <label>Tasty Score:</label>
                <input
                  name="score"
                  type="number"
                  placeholder="1-100"
                  className="inputCreate"
                  value={formulario.score}
                  onChange={handleChange}
                />
              </div>
              <div className="alinearFormulario">
                <label>Health's Score :</label>
                <input
                  name="health"
                  type="number"
                  placeholder="1-100"
                  className="inputCreate"
                  value={formulario.health}
                  onChange={handleChange}
                />
              </div>

              <div className="alinearFormulario">
                <label>Steps :</label>
                <textarea
                  name="steps"
                  className="alinearFormulario inputCreate"
                  cols="50"
                  rows="10"
                  value={formulario.steps}
                  onChange={handleChange}
                  placeholder="Step 1:... Step 2:.. "
                />
              </div>

              {types && types.length > 0 && (
                <div className="alinearFormulario">
                  <h3>Choice type of your recipe : </h3>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="1"
                        checked={types2.glutenFree}
                        onChange={() =>
                          setTypes2({
                            ...types2,
                            glutenFree: !types2.glutenFree,
                          })
                        }
                      />
                      {types[0].name}
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="2"
                        checked={types2.ketogenic}
                        onChange={() =>
                          setTypes2({ ...types2, ketogenic: !types2.ketogenic })
                        }
                      />
                      {types[1].name}
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="3"
                        checked={types2.vegetarian}
                        onChange={() =>
                          setTypes2({
                            ...types2,
                            vegetarian: !types2.vegetarian,
                          })
                        }
                      />
                      {types[2].name}
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="4"
                        checked={types2.lactoVegetarian}
                        onChange={() =>
                          setTypes2({
                            ...types2,
                            lactoVegetarian: !types2.lactoVegetarian,
                          })
                        }
                      />
                      {types[3].name}
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="5"
                        checked={types2.ovoVegetarian}
                        onChange={() =>
                          setTypes2({
                            ...types2,
                            ovoVegetarian: !types2.ovoVegetarian,
                          })
                        }
                      />
                      {types[4].name}
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="6"
                        checked={types2.vegan}
                        onChange={() =>
                          setTypes2({ ...types2, vegan: !types2.vegan })
                        }
                      />
                      {types[5].name}
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="7"
                        checked={types2.pescetarian}
                        onChange={() =>
                          setTypes2({
                            ...types2,
                            pescetarian: !types2.pescetarian,
                          })
                        }
                      />
                      {types[6].name}
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="8"
                        checked={types2.paleo}
                        onChange={() =>
                          setTypes2({ ...types2, paleo: !types2.paleo })
                        }
                      />
                      {types[7].name}
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="9"
                        checked={types2.primal}
                        onChange={() =>
                          setTypes2({ ...types2, primal: !types2.primal })
                        }
                      />
                      {types[8].name}
                    </label>
                  </div>
                </div>
              )}
              {formulario.name !== "" &&
              formulario.resume !== "" &&
              formulario.score !== 0 &&
              formulario.health !== 0 &&
              formulario.steps !== "" ? (
                types2.glutenFree ||
                types2.ketogenic ||
                types2.lactoVegetarian ||
                types2.ovoVegetarian ||
                types2.paleo ||
                types2.pescetarian ||
                types2.primal ||
                types2.vegan ||
                types2.vegetarian ? (
                  <input
                    className="button justifySelf"
                    type="submit"
                    value="Submit!"
                  />
                ) : null
              ) : null}
            </form>
          </div>
        )}
        {hecho == "Recipe Created" && !mostrarFormulario && (
          <div className="alinearFormulario">
            <h2>{hecho}</h2>
            <Link to="/Home">
              <input
                type="button"
                value="Go Home!"
                className="button align separar"
                onClick={handleClick}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { types: state.types, hecho: state.formulario };
}
function mapDispatchToProps(dispatch) {
  return {
    sendFormulario: (formulario) => dispatch(sendFormulario(formulario)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);
