import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { ShopLandingComponent } from './shop-landing/shop-landing.component';
import { PlanOrderComponent } from './plan-order/plan-order.component';
import { ProdOrderComponent } from './prod-order/prod-order.component';


@NgModule({
  declarations: [LoginComponent, HeaderComponent, SidenavComponent, SgopLandigComponent, ShopLandingComponent, PlanOrderComponent, ProdOrderComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
