import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    
    private recipes: Recipe[] = [
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
      ];

    constructor(){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes);
    }
    getRecipes() {
        return this.recipes.slice();
    }
    
    getRecipe (index: number) {
        return this.recipes[index];
    }
   
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}