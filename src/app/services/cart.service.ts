import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = 'http://localhost:5000/cart';
  constructor(private client: HttpClient) {}

  getAllCarts() {
    return this.client.get(this.baseUrl);
  }
  getCartById(cartId: any) {
    return this.client.get(`${this.baseUrl}/${cartId}`);
  }
  addCart(cart: any) {
    return this.client.post(`${this.baseUrl}`, cart);
  }
  editCart(cartId: any, cart: any) {
    return this.client.put(`${this.baseUrl}/${cartId}`, cart);
  }
  deleteCart(cartId: any) {
    return this.client.delete(`${this.baseUrl}/${cartId}`);
  }
}
