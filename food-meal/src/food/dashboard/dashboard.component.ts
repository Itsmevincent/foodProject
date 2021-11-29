import { Component, SecurityContext } from '@angular/core';
import { FoodService } from '../food.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'Dashboard';
  foodDetails: any = "";
  ingredients: any = [];
  safeSrc: SafeResourceUrl = "";
  searchFood: any = "";

  constructor(private foodService: FoodService, public sanitizer: DomSanitizer) {
    this.foodService.getRandomFood().subscribe((resultRandomFood: any) => {
      this.listFoodDetails(resultRandomFood);
    });
  }

  listFoodDetails(foodItems: any) {
    if (foodItems.meals.length > 0) {
      this.foodDetails = foodItems['meals'][0];
      this.changeUrlPath();
      let i = 0;
      for (i = 1; i <= 20; i++) {
        let ingredientValue = "";
        let measureValue = "";
        let ingredientDetails = { "ingredient": "", "measure": "" }
        ingredientValue = this.foodDetails['strIngredient' + i];
        measureValue = this.foodDetails['strMeasure' + i]
        if (ingredientValue && measureValue) {
          this.addIngredientDetails(ingredientDetails, ingredientValue, measureValue);
        } else if (ingredientValue && measureValue && measureValue == "") {
          this.addIngredientDetails(ingredientDetails, ingredientValue, measureValue);
        }
      }
    }
  }
  addIngredientDetails(ingredientDetails: any, ingredient: any, measure: any) {
    ingredientDetails.ingredient = ingredient;
    ingredientDetails.measure = measure;
    this.ingredients.push(ingredientDetails);
  }

  changeUrlPath() {
    if (this.foodDetails.strYoutube) {
      let url = this.foodDetails.strYoutube.replace('watch?v=', 'embed/');
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

  searchFoodBtn() {
    if (this.searchFood) {
      this.foodService.getFoodByName(this.searchFood).subscribe(searchResult => {
        this.listFoodDetails(searchResult);
      })
    }
  }

  refresh(): void {
    window.location.reload();
  }
}