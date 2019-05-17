import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

export interface FeatureState {
    recipes: State
}

export interface State {
    recipes: Recipe[];
  }
  
const initialState: State = {
recipes: [
    new Recipe('A Test Recipe',
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingredient('Meet',1),
            new Ingredient('French Fries',20)
        ]),
    new Recipe('Another Test Recipe', 
    'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meet',1)
        ])
    ]
};

export function recipeReducer(state = initialState, action){
return state;


}