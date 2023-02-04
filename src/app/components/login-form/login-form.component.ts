import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(
    private adminService: AdminService,
    private customerService: CustomerService
  ) {}
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get getEmail() {
    return this.userForm.controls['email'];
  }
  get getPassword() {
    return this.userForm.controls['password'];
  }

  formSubmited: boolean = false;
  userFound: boolean = false;
  user: any = {};
  router: Router = new Router();
  login() {
    this.adminService
      .loginAdmin({
        email: this.getEmail.value,
        password: this.getPassword.value,
      })
      .subscribe((response) => {
        if (response) {
          console.log('admin');
          this.userFound = true;
          this.user = response;
        }
      });
    if (!this.userFound) {
    }
    this.customerService
      .loginCustomer({
        email: this.getEmail.value,
        password: this.getPassword.value,
      })
      .subscribe((response) => {
        if (response) {
          console.log('customer');
          this.userFound = true;
          this.user = response;
        }
      });
    this.formSubmited = true;
  }
}
