import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, 
        private recipeService: RecipeService){}

    storeRecipes(){
        // const token = this.authService.getToken();
        // return this.http.put('https://ng-recipe-book-6f119.firebaseio.com/recipes.json?auth=' + token,this.recipeService.getRecipes());
        // return this.http.put('https://ng-recipe-book-6f119.firebaseio.com/recipes.json',this.recipeService.getRecipes(),
        // {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token)
        // });
        const req = new HttpRequest('PUT','https://ng-recipe-book-6f119.firebaseio.com/recipes.json',
        this.recipeService.getRecipes(), {
            reportProgress: true
            // params: new HttpParams().set('auth', token)
        });
        return this.http.request(req);
    }

    getRecipes(){
         this.http.get<Recipe[]>('https://ng-recipe-book-6f119.firebaseio.com/recipes.json?', {
             observe: 'body',
             responseType: 'json'
         })
        .pipe(map(
            (recipes) => {
                console.log(recipes);
                for (let recipe of recipes) {
                  if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                  }
                }
                return recipes;
              }
        ))
        .subscribe(
            (response: Recipe[])=>{
                this.recipeService.setRecipes(response);
            }
        );
    }
}