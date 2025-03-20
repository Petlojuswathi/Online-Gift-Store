import { Component, OnInit } from '@angular/core';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {  // Implements OnInit Interface for ngOnInit()

  countries: any;
  products: any;

 
  constructor(private service: GiftService) {
  }

  // ngOnInit will execute when the Component (HTML, CSS, and TypeScript) is Loaded
  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => { 
      this.countries = data; 
    });
  }

  registerSubmit(regForm: any) {
    console.log(regForm);
    this.service.registerCustomer(regForm).subscribe((data: any) => {
      console.log(data);
    });
  }
}
