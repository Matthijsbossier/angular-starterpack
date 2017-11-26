

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
//import { RecipeService } from './recipe.services';
//import { User } from '../../models/user.model';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:  [RecipeService] ,
  //encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  title = 'Recipe';
  //users: User[];
  recipes: Recipe[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
      .then(recipes => this.recipes = recipes)
      .catch(error => console.log(error));
  }


}

