import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FinanceComponent } from './finance/finance.component';
import { Finance1Component } from './finance1/finance1.component';
import { Finance2Component } from './finance2/finance2.component';
import { Finance3Component } from './finance3/finance3.component';
import { Finance4Component } from './finance4/finance4.component';
import { CustomerLandingComponent } from './customer-landing/customer-landing.component';

const routes: Routes = [
  {path:'', component :CustomerLandingComponent, children:[
    {path:'login', component: LoginComponent},
    {path:'user-profile', component: UserProfileComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'dashboard1',component: Dashboard1Component},
    {path:'dashboard2',component: Dashboard2Component},
    {path:'dashboard3',component: Dashboard3Component},
    {path:'finance',component:FinanceComponent},
    {path:'finance1',component:Finance1Component},
    {path:'finance2',component:Finance2Component},
    {path:'finance3',component:Finance3Component},
    {path:'finance4',component:Finance4Component}
  ]}
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
