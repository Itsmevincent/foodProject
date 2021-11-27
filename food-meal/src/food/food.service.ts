import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor( private httpClient: HttpClient) { }

  getRandomFood(){
    return this.httpClient.get("https://www.themealdb.com/api/json/v1/1/random.php");
  }

  getFoodByName(foodName:any){
    return this.httpClient.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+foodName);
  }
}