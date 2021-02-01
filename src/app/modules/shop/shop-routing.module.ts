import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanOrderComponent } from './plan-order/plan-order.component';
import { ProdOrderComponent } from './prod-order/prod-order.component';
import { LoginComponent } from '../shop/login/login.component';
import { ShopLandingComponent } from './shop-landing/shop-landing.component';
import { ProdOrderPendingComponent } from './prod-order-pending/prod-order-pending.component';
import { ProdOrderReleaseComponent } from './prod-order-release/prod-order-release.component';


const routes: Routes = [
  {path:'', component:ShopLandingComponent, children:[
    {path:'login',component:LoginComponent},
    {path:'planorder',component: PlanOrderComponent},
    {path:'prodorder',component:ProdOrderComponent},
    {path:'dashboard',component:ProdOrderComponent},
    {path:'displaypo',component:ProdOrderPendingComponent},
    {path:'releasepo',component:ProdOrderReleaseComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
