import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  //Cart Using Service
  cartItems: any;
  userLogin: boolean;
  loginStatus: any;

  constructor(private http: HttpClient) {
    this.userLogin = false;

    //Cart Using Service
    this.cartItems = [];
    this.loginStatus = new Subject();
  }

  //Cart Using Service
  addToCart(product: any) {
    this.cartItems.push(product);
  }
  //When User Authentication is Success from Login Component
  setUserLogin() {
    this.userLogin = true;
    this.loginStatus.next(true);
  }

  //When User Logged Out
  setUserLogout() {
    this.userLogin = false;
    this.loginStatus.next(false);
  }

  getLoginInfo() {
    return this.loginStatus.asObservable();
  }

  //For Authentication Guard, Providing the Login Status
  getLoginStatus(): boolean {
    return this.userLogin;
  }

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  getAllCustomers(): any {
    return this.http.get('http://localhost:8085/getCustomers');
  }
  getCustomerById(customerId: any) {
    return this.http.get('http://localhost:8085/getCustomerById/' + customerId);
  }
  getProducts(): any {
    return this.http.get('http://localhost:8085/getProducts');
  }
  registerCustomer(customer: any) {
    return this.http.post('http://localhost:8085/addCustomer', customer);
  }
  deleteCustomerById(customerId: any) {
    return this.http.delete('http://localhost:8085/deleteCustomerById/' + customerId);
  }
  updateCustomer(customer: any) {
    return this.http.put('http://localhost:8085/updateCustomer', customer);
  }
  customerLogin(customer: any) {
    return this.http.post('http://localhost:8085/customerLogin', customer).toPromise();
  }
  addOrders(orders: any) {
    return this.http.post('http://localhost:8085/addOrder', orders);
  }
  getOrders(emailId: any) {
    return this.http.get('http://localhost:8085/getOrderByEmailId/' + emailId);
  }
  
}
