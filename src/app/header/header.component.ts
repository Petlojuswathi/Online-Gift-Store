import { Component, OnInit } from '@angular/core';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  //Login Information
  loginInfo: any;
  cartItems: any;

  constructor(private service: GiftService) {
    this.cartItems = service.cartItems;
  }
  ngOnInit() {
    this.service.getLoginInfo().subscribe((data: any) => {this.loginInfo = data;});
  }
}
