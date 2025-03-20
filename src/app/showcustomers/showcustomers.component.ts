
import { GiftService } from '../gift.service';
import { NgFor, NgIf } from '@angular/common';

import { Component, OnInit } from '@angular/core';


//Variable for Modal Dialog Box
declare var jQuery: any;

@Component({
  imports: [NgFor],
  selector: 'app-showcustomers',
  templateUrl: './showcustomers.component.html',
  styleUrl: './showcustomers.component.css'
})
export class ShowCustomersComponent implements OnInit { // Implementing OnInit Interface for ngOnInit method

  emailId: any;
  customers: any;   
  customerObj: any;

  constructor(private service: GiftService) { 
    this.emailId = localStorage.getItem("customerEmail");

    this.customerObj = {
      "customerId": "", 
      "customerName": "", 
      "emailId": "", 
      "password": "",
      "country": "", 
      "mobile": "", 
      "address": "", 
      "gender": ""   
    }
  }

  ngOnInit() {
    this.service.getAllCustomers().subscribe((data: any) => { this.customers = data; console.log(data);});
  }

  // For Edit Customer
  editCustomer(customer: any) {
    this.customerObj = { ...customer }; // Cloning to avoid direct mutation
    jQuery('#customerModal').modal('show');
  }

  // For Update Customer
  updateCustomer() {
    this.service.updateCustomer(this.customerObj).subscribe((data: any) => {
      console.log(data);
    });
  }

  deleteCustomer(customerId: any) {
    alert("Customer Record with CustomerId: " + customerId + ", Deleted Successfully!!!");    
    this.service.deleteCustomerById(customerId).subscribe((data: any) => {
      console.log(data);
    });     

    const i = this.customers.findIndex((customer: any) => customer.customerId == customerId);
    this.customers.splice(i, 1);
  }
}

  

