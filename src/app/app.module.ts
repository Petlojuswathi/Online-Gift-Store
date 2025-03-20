import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ShowCustomerByIdComponent } from './showcustomerbyid/showcustomerbyid.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GenderPipe } from './gender.pipe';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyordersComponent } from './myorders/myorders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShowCustomerByIdComponent,
    GenderPipe,
    HeaderComponent,
    LogoutComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    MyordersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
