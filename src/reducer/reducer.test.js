import rootReducer from './index.js';
import {ordenarMayorMenor,ordenarMenorMayor,ordenarXScore,ordenarXTypo} from '../actions/index';

const estadoInicial={
    recipes:{},
    diets:{},
    recipeDetails:{},
    types:{},
    formulario:{}
}
describe('reducer', () => {
    it('Deberia retornar el estado inicial', () => {
      expect(rootReducer(undefined, [])).toEqual(estadoInicial)
  })

    it('Debería ordenar las recetas por titulo de la a-z',()=>{
        const array1= [
            {title:'a',spoonacularScore:55},{title:'d',spoonacularScore:25},{title:'e',spoonacularScore:35},
            {title:'b',spoonacularScore:45},{title:'c',spoonacularScore:80}
        ]
        const array2= [
            {title:'z',spoonacularScore:55},{title:'s',spoonacularScore:25},{title:'w',spoonacularScore:35},
            {title:'p',spoonacularScore:45},{title:'c',spoonacularScore:80}
        ]
        const array3= [
            {title:'l',spoonacularScore:55},{title:'y',spoonacularScore:25},{title:'j',spoonacularScore:35},
            {title:'h',spoonacularScore:45},{title:'m',spoonacularScore:80}
        ]
        expect(rootReducer({...estadoInicial,recipes:array1},ordenarMayorMenor())).toEqual({...estadoInicial, recipes:[
            {title:'a',spoonacularScore:55},{title:'b',spoonacularScore:45},
            {title:'c',spoonacularScore:80},{title:'d',spoonacularScore:25},{title:'e',spoonacularScore:35}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array2},ordenarMayorMenor())).toEqual({...estadoInicial, recipes:[
            {title:'c',spoonacularScore:80},{title:'p',spoonacularScore:45},{title:'s',spoonacularScore:25},
            {title:'w',spoonacularScore:35},{title:'z',spoonacularScore:55}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array3},ordenarMayorMenor())).toEqual({...estadoInicial, recipes:[
            {title:'h',spoonacularScore:45},{title:'j',spoonacularScore:35},{title:'l',spoonacularScore:55},
            {title:'m',spoonacularScore:80},{title:'y',spoonacularScore:25}
        ]})
    })

    it('Debería ordenar las recetas por titulo de la z-a',()=>{
        const array1= [
            {title:'a',spoonacularScore:55},{title:'d',spoonacularScore:25},{title:'e',spoonacularScore:35},
            {title:'b',spoonacularScore:45},{title:'c',spoonacularScore:80}
        ]

        const array2= [
            {title:'z',spoonacularScore:55},{title:'s',spoonacularScore:25},{title:'w',spoonacularScore:35},
            {title:'p',spoonacularScore:45},{title:'c',spoonacularScore:80}
        ]
        const array3= [
            {title:'l',spoonacularScore:55},{title:'y',spoonacularScore:25},{title:'j',spoonacularScore:35},
            {title:'h',spoonacularScore:45},{title:'m',spoonacularScore:80}
        ]

        expect(rootReducer({...estadoInicial,recipes:array1},ordenarMenorMayor())).toEqual({...estadoInicial, recipes:[
            {title:'e',spoonacularScore:35},{title:'d',spoonacularScore:25},{title:'c',spoonacularScore:80},
            {title:'b',spoonacularScore:45},{title:'a',spoonacularScore:55}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array2},ordenarMenorMayor())).toEqual({...estadoInicial, recipes:[
            
            {title:'z',spoonacularScore:55},{title:'w',spoonacularScore:35},{title:'s',spoonacularScore:25},
            {title:'p',spoonacularScore:45},{title:'c',spoonacularScore:80}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array3},ordenarMenorMayor())).toEqual({...estadoInicial, recipes:[
            
            {title:'y',spoonacularScore:25},{title:'m',spoonacularScore:80},{title:'l',spoonacularScore:55},
            {title:'j',spoonacularScore:35},{title:'h',spoonacularScore:45}
        ]})
    })

    it('Debería ordenar las recetas por el Score mas alto',()=>{
        const array1= [
            {title:'a',spoonacularScore:55},{title:'d',spoonacularScore:25},{title:'e',spoonacularScore:35},
            {title:'b',spoonacularScore:45},{title:'c',spoonacularScore:80}
        ]
        const array2= [
            {title:'z',spoonacularScore:5},{title:'s',spoonacularScore:36},{title:'w',spoonacularScore:17},
            {title:'p',spoonacularScore:88},{title:'c',spoonacularScore:40}
        ]
        const array3= [
            {title:'l',spoonacularScore:55},{title:'y',spoonacularScore:25},{title:'j',spoonacularScore:35},
            {title:'h',spoonacularScore:45},{title:'m',spoonacularScore:80}
        ]
        expect(rootReducer({...estadoInicial,recipes:array1},ordenarXScore())).toEqual({...estadoInicial, recipes:[
            {title:'c',spoonacularScore:80},{title:'a',spoonacularScore:55},{title:'b',spoonacularScore:45},
            {title:'e',spoonacularScore:35},{title:'d',spoonacularScore:25}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array2},ordenarXScore())).toEqual({...estadoInicial, recipes:[
            {title:'p',spoonacularScore:88},{title:'c',spoonacularScore:40},{title:'s',spoonacularScore:36},
            {title:'w',spoonacularScore:17},{title:'z',spoonacularScore:5}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array3},ordenarXScore())).toEqual({...estadoInicial, recipes:[
            {title:'m',spoonacularScore:80}, {title:'l',spoonacularScore:55},{title:'h',spoonacularScore:45},
            {title:'j',spoonacularScore:35}, {title:'y',spoonacularScore:25}
        ]})
    })

    it('Debería filtrar las recetas por el tipo de comida (dieta)',()=>{
        const array1= [
            {title:'a',spoonacularScore:55,diets:['pescetarian','gluten free','primal']},
            {title:'d',spoonacularScore:25,diets:['lacto vegetarian','primal']},
            {title:'e',spoonacularScore:35,diets:['gluten free']}, 
            {title:'b',spoonacularScore:45,diets:['pescetarian']},
            {title:'c',spoonacularScore:80,diets:['lacto vegetarian']}
        ]
        expect(rootReducer({...estadoInicial,recipes:array1},ordenarXTypo('pescetarian'))).toEqual({...estadoInicial ,recipes:array1, diets:[
            {title:'a',spoonacularScore:55,diets:['pescetarian','gluten free','primal']},{title:'b',spoonacularScore:45,diets:['pescetarian']}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array1},ordenarXTypo('gluten free'))).toEqual({...estadoInicial ,recipes:array1, diets:[
            {title:'a',spoonacularScore:55,diets:['pescetarian','gluten free','primal']},{title:'e',spoonacularScore:35,diets:['gluten free']}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array1},ordenarXTypo('primal'))).toEqual({...estadoInicial ,recipes:array1, diets:[
            {title:'a',spoonacularScore:55,diets:['pescetarian','gluten free','primal']},{title:'d',spoonacularScore:25,diets:['lacto vegetarian','primal']}
        ]})
        expect(rootReducer({...estadoInicial,recipes:array1},ordenarXTypo('lacto vegetarian'))).toEqual({...estadoInicial ,recipes:array1, diets:[
           {title:'d',spoonacularScore:25,diets:['lacto vegetarian','primal']},{title:'c',spoonacularScore:80,diets:['lacto vegetarian']}
        ]})
    })
})