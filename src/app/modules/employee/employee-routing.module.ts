import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeLandingComponent } from './employee-landing/employee-landing.component';
import { LoginComponent } from '../employee/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { FinanceComponent } from './finance/finance.component';
//import { Finance1Component } from './finance1/finance1.component';


const routes: Routes = [
  {path:'', component:EmployeeLandingComponent, children:[
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'dashboard1',component:Dashboard1Component},
    {path:'dashboard2',component:Dashboard2Component},
   // {path:'dashboard3',component:Dashboard3Component},
    {path:'finance',component:FinanceComponent},
    //{path:'finance1',component:Finance1Component},
    //{path:'finance2',component:Finance2Component},
    //{path:'finance3',component:Finance3Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
