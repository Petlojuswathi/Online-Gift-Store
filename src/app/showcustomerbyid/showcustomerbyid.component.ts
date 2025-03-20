import { Component } from '@angular/core';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-showcustomerbyid',
  standalone: false,
  templateUrl: './showcustomerbyid.component.html',
  styleUrl: './showcustomerbyid.component.css'
})
export class ShowCustomerByIdComponent {
  customers: any;
  customerId: any;
  customer: any;
  msg: string;
  emailId: any; //for fetching data from LocalStorage

  constructor(private service: GiftService) {
     this.emailId = localStorage.getItem("customerName");
     this.msg = "";
  }

  getCustomer() {
    this.service.getCustomerById(this.customerId).subscribe((data: any) => {
      this.customer = data;

      if(data == null) {
        this.msg = "Customer Record Not Found!!!";
      }
    });
    }
  }

