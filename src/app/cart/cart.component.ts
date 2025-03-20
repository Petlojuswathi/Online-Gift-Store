import { Component } from '@angular/core';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
  //Cart Using Service
  cartItems: any;
  emailId: any;
  total: number;
  customerName: any;
  orders: any;

  constructor(private service: GiftService) {

    this.orders = {
      "orderDate":"",
      "totalAmout":0,
      "emailId":"",
      "customer": {"customerId":""},
      "product": {"productId":""}
    }

    this.customerName = localStorage.getItem("customerName");

    this.total = 0;
    //Cart Using Service
    this.cartItems = service.cartItems;
    
    for (let product of this.cartItems) {
      this.total += product.price;
  }
  }

  removeCartItem(product: any) {
    alert("Delete Cart Item.");
    const i = this.cartItems.findIndex((prod: any) => {
      return product.prodId == prod.prodId;
    });
    this.cartItems.splice(i, 1);
    this.total -= product.price;
  }

  purchase() {

    let orderDate = new Date();
    let totalAmout = this.total;
    let emailId = localStorage.getItem("customerName");

    this.orders.orderDate = orderDate;
    this.orders.emailId = emailId;
    this.orders.customer.customerId = 0;
    
    for (let product of this.cartItems) {
      this.orders.product.productId = product.productId;      
      this.orders.totalAmount = product.price;
      this.service.addOrders(this.orders).subscribe((data: any) => {console.log(data);});
    }

    console.log("Total:")
    console.log(this.total);

    this.total = 0;
    this.cartItems.splice(0, this.cartItems.length); 
    alert("Thank You For Purchasing From Our WebSite");
  }
}