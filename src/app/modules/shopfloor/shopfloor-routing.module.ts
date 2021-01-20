import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../shopfloor/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanOrderComponent } from './plan-order/plan-order.component';
import { ProdOrderComponent } from './prod-order/prod-order.component';
import { ShopfloorLandingComponent } from './shopfloor-landing/shopfloor-landing.component';


const routes: Routes = [
  {path:'', component:ShopfloorLandingComponent, children:[
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'planorder',component:PlanOrderComponent},
    {path:'prodorder',component:ProdOrderComponent},
  ]}
];

NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopfloorRoutingModule { }
