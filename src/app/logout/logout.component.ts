import { Component } from '@angular/core';
import { Router } from '@angular/router';   //For Navigating / Routing
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  //Dependency Injection for Router and GiftService
  constructor(private router: Router, private service: GiftService) {

    //Making the userLogin variable value to false under GiftService
    this.service.setUserLogout();

    localStorage.removeItem("emailId");
    localStorage.clear();

    this.router.navigate(['home']);
  }
}

