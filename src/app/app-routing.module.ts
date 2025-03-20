import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowCustomersComponent } from './showcustomers/showcustomers.component';
import { ShowCustomerByIdComponent } from './showcustomerbyid/showcustomerbyid.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyordersComponent } from './myorders/myorders.component';




//path: '' => Refers to localhost:4200

const routes: Routes = [
  {path:'',                  component:HomeComponent},
  {path:'home',              component:HomeComponent},
  {path:'login',             component:LoginComponent},
  {path:'register',          component:RegisterComponent},
  {path:'aboutus',           component:AboutusComponent},
  {path:'contactus',         component:ContactusComponent},
  {path:'products',          component:ProductsComponent},
  {path:'showcustomers',     canActivate:[authGuard],component:ShowCustomersComponent},
  {path:'myorders',          canActivate:[authGuard],component:MyordersComponent},
  {path: 'showcustomerbyid', canActivate:[authGuard],component:ShowCustomerByIdComponent},
  {path:'cart',              canActivate:[authGuard],component:CartComponent},
  {path:'logout',            canActivate:[authGuard],component:LogoutComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }