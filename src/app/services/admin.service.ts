import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'http://localhost:5000/customer';
  private adminId = '63dbce59500398617662262b';
  constructor(private client: HttpClient) {}

  // getAllAdmins() {}
  getAdminById() {
    return this.client.get(`${this.baseUrl}/customer/${this.adminId}`);
  }
  // addAdmin() {}
  // editAdmin() {}
  // deleteAdmin() {}
}
