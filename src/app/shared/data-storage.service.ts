import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){
        return this.http.put('https://ng-recipe-book-6f119.firebaseio.com/recipes.json',this.recipeService.getRecipes());
    }

    getRecipes(){
        return this.http.get('https://ng-recipe-book-6f119.firebaseio.com/recipes.json')
        .pipe(map(
            (response: Recipe[])=>{
               for(let recipe of response){
                   if(!recipe['ingredients']){
                       console.log(recipe)
                         recipe['ingredients'] = [];
                   }
               }
               return response;
            }
        ))
        .subscribe(
            (response: Recipe[])=>{
                this.recipeService.setRecipes(response);
            }
        );
    }
}