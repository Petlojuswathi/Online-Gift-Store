import { Component, OnInit } from '@angular/core';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-myorders',
  standalone: false,
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})
export class MyordersComponent implements OnInit {

  myorders: any;
  emailId: any;

  constructor(private service: GiftService) {
    this.emailId = localStorage.getItem("customerName");
  }

  ngOnInit(){
      this.service.getOrders(this.emailId).subscribe((data: any) => {
        this.myorders = data;
        console.log(data);
      });
  }

}
