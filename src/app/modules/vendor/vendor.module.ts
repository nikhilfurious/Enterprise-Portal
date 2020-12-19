import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { FinanceComponent } from './finance/finance.component';
import { Finance1Component } from './finance1/finance1.component';
import { Finance2Component } from './finance2/finance2.component';
import { Finance3Component } from './finance3/finance3.component';
import { VendorLandingComponent } from './vendor-landing/vendor-landing.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [LoginComponent, ProfileComponent, DashboardComponent, Dashboard1Component, Dashboard2Component, Dashboard3Component, FinanceComponent, Finance1Component, Finance2Component, Finance3Component, VendorLandingComponent, HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    SharedModule
  ]
})
export class VendorModule { }
