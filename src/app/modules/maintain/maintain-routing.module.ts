import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../maintain/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintainLandingComponent } from './maintain-landing/maintain-landing.component';
import { NotificationComponent } from './notification/notification.component';
import { WorkorderComponent } from './workorder/workorder.component';


const routes: Routes = [
  {path:'', component:MaintainLandingComponent, children:[
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'notification',component:NotificationComponent},
    {path:'workorder',component:WorkorderComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintainRoutingModule { }
