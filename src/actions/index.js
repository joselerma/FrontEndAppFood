export function consultRecipe(search) {
  return function (dispatch) {
    return fetch(
      ` https://powerful-badlands-29756.herokuapp.com/recipes?name=${search}`
    )
      .then((response) => response.json())
      .then((json) => dispatch({ type: "CONSULT_RECIPE", payload: json }));
  };
}
export function ordenarMayorMenor() {
  return { type: "ORDENAR_MAYOR_MENOR" };
}

export function ordenarMenorMayor() {
  return { type: "ORDENAR_MENOR_MAYOR" };
}

export function ordenarXScore() {
  return { type: "ORDENAR_X_SCORE" };
}

export function ordenarXTypo(diet) {
  return { type: "ORDENAR_X_TYPO", payload: diet };
}

export function showRecipeDetails(recipeId) {
  return function (dispatch) {
    return fetch(
      ` https://powerful-badlands-29756.herokuapp.com/recipes/${recipeId}`
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: "SHOW_DETAILS",
          payload: response[0] ? response[0].steps : response,
        });
      });
  };
}

export function sendFormulario(formulario) {
  return function (dispatch) {
    return fetch(` https://powerful-badlands-29756.herokuapp.com/recipe`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ form: formulario }),
    })
      .then((response) => response.json())
      .then((response) => dispatch({ type: "FORMULARIO", payload: response }));
  };
}

export function bringTypes() {
  return function (dispatch) {
    return fetch(` https://powerful-badlands-29756.herokuapp.com/types`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: "BRING_TYPES", payload: response });
      });
  };
}
