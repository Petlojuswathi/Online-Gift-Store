import { Component, OnInit } from '@angular/core';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  loginInfo: any;
  emailId: any;
  products: any;
  customerName: any;

  constructor(private service: GiftService) {
    this.customerName = localStorage.getItem("customerName");
    this.loginInfo = service.getLoginStatus();
  }

  ngOnInit() {
      this.service.getProducts().subscribe((data: any) => {this.products = data; console.log(data);});
  }

  addToCart(product: any) {
    this.service.addToCart(product);    
  }

}