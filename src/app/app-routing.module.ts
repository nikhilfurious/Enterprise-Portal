import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './layouts/landing/landing.component';


const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)},
  {path:'vendor', loadChildren:() => import('./modules/vendor/vendor.module').then(m => m.VendorModule)},
  {path:'employee', loadChildren:() => import('./modules/employee/employee.module').then(m => m.EmployeeModule)},
  {path:'maintain', loadChildren:() => import('./modules/maintain/maintain.module').then(m => m.MaintainModule)},
 {path:'shop', loadChildren:() => import('./modules/shop/shop.module').then(m => m.ShopModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
