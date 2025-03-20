import { Component } from '@angular/core';
import { Router } from '@angular/router';   // For Routing / Navigating
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // For User Login
  customer: any;

  constructor(private router: Router, private service: GiftService) {}

  // Provide the async keyword for loginSubmit() method to make the action asynchronous
  async loginSubmit(loginForm: any) {
    localStorage.setItem("customerName", loginForm.emailId);

    if (loginForm.emailId == "ADMIN" && loginForm.password == "ADMIN") { 
      this.service.setUserLogin();
      this.router.navigate(['showcustomers']);
    } else {      
      // Making the cursor to be waiting until the data is fetched from the backend.
      await this.service.customerLogin(loginForm).then((data: any) => {
        this.customer = data;
      });

      // For Customer Login
      if (this.customer != null) {
        this.service.setUserLogin();
        this.router.navigate(['products']);
      } else {
        alert('Invalid Credentials');
      }
    }
  }
}
