// import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
// import { Recipe } from '../recipe.model';
// import { RecipeService} from '../../../services/recipe.service';

// @Component({
//   selector: 'app-recipe-detail',
//   templateUrl: './recipe-detail.component.html',
//   styleUrls: ['./recipe-detail.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
// export class RecipeDetailComponent implements OnInit {
//   @Input() recipe: Recipe;

//   constructor(private recipeService: RecipeService) { }

//   ngOnInit() {
//   }

//   onAddToShoppingList(){
//     //this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
//   }

// }

// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute, Params, Router } from '@angular/router';

// // import { Recipe } from '../../../models/recipe.model';
// // import { RecipeService } from '../../../services/recipe.service';
// // import { Ingredient } from "../../../shared/ingredient.model";

// // @Component({
// //   selector: 'app-recipe-detail',
// //   templateUrl: './recipe-detail.component.html',
// //   styleUrls: ['./recipe-detail.component.css']
// // })
// // export class RecipeDetailComponent implements OnInit {
// //   recipe: Recipe;
// //   id: string;
// //   ingredients: Ingredient[];

// //   constructor(private recipeService: RecipeService,
// //               private route: ActivatedRoute,
// //               private router: Router) {
// //   }

// //   ngOnInit() {
// //     this.route.params
// //       .subscribe(
// //         (params: Params) => {
// //           this.id = params['id'];
// //           this.recipeService.getRecipe(this.id);
// //         }
// //       );
// //   }

// //   onAddToShoppingList() {
// //     this.recipeService.addIngredientsToShoppingList(this.recipe);
// //   }

// //   onEditRecipe() {
// //     this.router.navigate(['edit'], {relativeTo: this.route});
// //     // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
// //   }

// // }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: string;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}


