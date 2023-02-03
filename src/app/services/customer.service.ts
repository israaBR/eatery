import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseUrl = 'http://localhost:5000/customer';
  constructor(private client: HttpClient) {}

  getAllCustomers() {
    return this.client.get(this.baseUrl);
  }
  getCustomerById(customerId: any) {
    return this.client.get(`${this.baseUrl}/${customerId}`);
  }
  addCustomer(customer: any) {
    return this.client.post(this.baseUrl, customer);
  }
  editCustomer(customerId: any, customer: any) {
    return this.client.put(`${this.baseUrl}/${customerId}`, customer);
  }
  deleteCustomer(customerId: any) {
    return this.client.delete(`${this.baseUrl}/${customerId}`);
  }
}
