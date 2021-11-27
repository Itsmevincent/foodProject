import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../food/dashboard/dashboard.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'food-dash', component: DashboardComponent },
      { path: '', redirectTo: '/food-dash', pathMatch: 'full' },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
