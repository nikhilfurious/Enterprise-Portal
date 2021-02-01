import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { ShopLandingComponent } from './shop-landing/shop-landing.component';
import { PlanOrderComponent } from './plan-order/plan-order.component';
import { ProdOrderComponent } from './prod-order/prod-order.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReleasePoComponent } from './release-po/release-po.component';
import { ProdOrderPendingComponent } from './prod-order-pending/prod-order-pending.component';
import { ProdOrderReleaseComponent } from './prod-order-release/prod-order-release.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [LoginComponent, HeaderComponent, SidenavComponent, ShopLandingComponent, PlanOrderComponent, ProdOrderComponent, ReleasePoComponent, ProdOrderPendingComponent, ProdOrderReleaseComponent, DashboardComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
