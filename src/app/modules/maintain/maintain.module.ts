import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintainRoutingModule } from './maintain-routing.module';
import { MaintainLandingComponent } from './maintain-landing/maintain-landing.component';

import { LoginComponent } from './login/login.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { WorkorderComponent } from './workorder/workorder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MaintainLandingComponent, LoginComponent, SidenavComponent, HeaderComponent, DashboardComponent, NotificationComponent, WorkorderComponent],
  imports: [
    CommonModule,
    MaintainRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class MaintainModule { }
