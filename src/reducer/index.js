const initialState={
    recipes:{},
    diets:{},
    recipeDetails:{},
    types:{},
    formulario:{}
}

function rootReducer( state = initialState, action){
    switch(action.type){
        case 'CONSULT_RECIPE' :
            return{
                ...state, recipes:(action.payload)
            }
        case 'ORDENAR_MAYOR_MENOR' :
             let array= state.recipes.sort(function (a, b) {
                if (a.title > b.title) {
                  return 1;
                }
                if (a.title < b.title) {
                  return -1;
                }
                return 0;
              })
             return { ...state,
                       recipes: array
             }

        case 'ORDENAR_MENOR_MAYOR' :
            
            let array2= state.recipes.sort(function (a, b) {
                if (a.title < b.title) {
                  return 1;
                }
                if (a.title > b.title) {
                  return -1;
                }
                return 0;
              })
             return { ...state,
                       recipes: array2
             }
        case 'ORDENAR_X_SCORE' :
          let array3= state.recipes.sort(function (a, b) {
           return  b.spoonacularScore - a.spoonacularScore
          })
          return { ...state,
            recipes: array3
          }
        
        case 'ORDENAR_X_TYPO' :
          let array4= state.recipes.filter(elem=> elem.diets.length>0)
          let array5= array4.filter(elem=>{
              return elem.diets.some(dieta=> dieta==action.payload||dieta.name==action.payload)
          })

          return { ...state,
            diets: array5
          }
        
        case 'SHOW_DETAILS' :

          return{
            ...state, recipeDetails:(action.payload)
        }
        case 'BRING_TYPES' :
          return {
            ...state,types:(action.payload)
          }
        case 'FORMULARIO' :
          return {
            ...state, formulario:(action.payload)
          }
    }
    return state;
}

export default rootReducer;
