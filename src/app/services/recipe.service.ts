import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from "rxjs/Subject";


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/recipes'; // URL to web api
  private ingredientUrl = environment.serverUrl + '/shopping-list';
  private recipes: Recipe[] = [];

  //
  //
  //
  constructor(private http: Http) { }

  //
  //
  //
  public getRecipes(): Promise<Recipe[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Recipe[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

//   getRecipe(index: string) {
//     return this.recipes[index];
//   }

  public getRecipe(id: string): Promise<Recipe[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl + '/' + id, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Recipe[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

    // public getRecipe(id: string)

    public addIngredientsToShoppingList(recipe: Recipe) {
    console.log('items toevoegen');
    recipe.ingredients.forEach(ingredient => {
    return this.http.post(this.ingredientUrl, { name: ingredient.name, amount: ingredient.amount })
      .toPromise()
      .then(response => {
        console.log("ingredient(s) toegevoegd")
      })
      .catch(error => {
        return this.handleError(error);
      });
    });
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

// voorbeeld van addrecipe
// this.http.post(this.serverUrl + '/recipes', recipe)
// .map(response => response.json() as Recipe)
// .subscribe(result => {
//     this.recipes.push(result as Recipe);
//     this.recipeChanged.next(this.recipes.slice());

// });
  //
  //
  //
  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}