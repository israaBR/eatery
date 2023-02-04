import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent {
  constructor(private customerService: CustomerService) {}

  customerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{11}$/),
    ]),
  });

  get getFName() {
    return this.customerForm.controls['firstName'];
  }
  get getLName() {
    return this.customerForm.controls['lastName'];
  }
  get getEmail() {
    return this.customerForm.controls['email'];
  }
  get getPassword() {
    return this.customerForm.controls['password'];
  }
  get getPhoneNumber() {
    return this.customerForm.controls['phoneNumber'];
  }
}
