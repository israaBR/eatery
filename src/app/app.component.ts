import { Component, OnInit } from '@angular/core';
import { ICart } from './models/cart';
import { ICustomer } from './models/user';
import { CartService } from './services/cart.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  customer: any = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    cart: '',
  };
  cart: any = {
    _id: '',
    items: [],
  };
  constructor(
    private customerService: CustomerService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cartService
      .getCartById('63dbce595003986176622629')
      .subscribe((response) => (this.cart = response));
  }
  title = 'eatery';
}
