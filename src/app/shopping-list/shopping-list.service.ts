import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChnaged = new Subject<Ingredient[]>();
    startedEditng = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredients(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChnaged.next(this.ingredients.slice());
    }

    deteleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChnaged.next(this.ingredients.slice());
    }
}