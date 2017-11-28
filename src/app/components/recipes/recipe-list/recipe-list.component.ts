// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { Recipe } from '../../../models//recipe.model';
// import { RecipeService} from '../../../services/recipe.service';

// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
// export class RecipeListComponent implements OnInit {

//   recipes: Recipe[];

//   constructor(private recipeService: RecipeService) { }

//   ngOnInit(): void {
//     this.recipeService.getRecipes()
//     .then(recipes => this.recipes = recipes)
//     .catch(error => console.log(error));
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() : void {
    this.recipeService.getRecipes()
    .then(recipes => this.recipes = recipes)
    .catch(error => console.log(error))
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
