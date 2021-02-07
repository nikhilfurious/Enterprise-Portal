import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EhsmRoutingModule } from './ehsm-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncidentComponent } from './incident/incident.component';
import { EiskComponent } from './eisk/eisk.component';
import { RiskComponent } from './risk/risk.component';


@NgModule({
  declarations: [SidenavComponent, HeaderComponent, LoginComponent, DashboardComponent, IncidentComponent, EiskComponent, RiskComponent],
  imports: [
    CommonModule,
    EhsmRoutingModule
  ]
})
export class EhsmModule { }
