import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopfloorRoutingModule } from './shopfloor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShopfloorLandingComponent } from './shopfloor-landing/shopfloor-landing.component';
import { PlanOrderComponent } from './plan-order/plan-order.component';
import { ProdOrderComponent } from './prod-order/prod-order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidenavComponent, ShopfloorLandingComponent, PlanOrderComponent, ProdOrderComponent, LoginComponent],
  imports: [
    CommonModule,
    ShopfloorRoutingModule,
    SharedModule,
    SharedModule
  ]
})
export class ShopfloorModule { }
