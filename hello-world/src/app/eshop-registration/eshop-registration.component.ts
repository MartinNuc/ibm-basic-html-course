import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eshop-registration',
  templateUrl: './eshop-registration.component.html',
  styleUrls: ['./eshop-registration.component.css']
})
export class EshopRegistrationComponent implements OnInit {

  formData = {
    email: '',
    address: {
      city: '',
      street: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log('submitting', this.formData);
  }

}
