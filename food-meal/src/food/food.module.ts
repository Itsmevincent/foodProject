import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import { FoodService } from './food.service';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [CommonModule,FormsModule],
  providers: [FoodService]
  
})
export class FoodModule { }