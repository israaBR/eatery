import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'http://localhost:5000/admin';
  constructor(private client: HttpClient) {}

  getAllAdmins() {
    return this.client.get(this.baseUrl);
  }
  getAdminById(adminId: any) {
    return this.client.get(`${this.baseUrl}/${adminId}`);
  }
  getAdminByEmail(adminEmail: any) {
    return this.client.get(`${this.baseUrl}/email/${adminEmail}`);
  }
  loginAdmin(admin: any) {
    return this.client.post(`${this.baseUrl}/login`, admin);
  }
  addAdmin(admin: any) {
    return this.client.post(this.baseUrl, admin);
  }
  editAdmin(adminId: any, admin: any) {
    return this.client.put(`${this.baseUrl}/${adminId}`, admin);
  }
  deleteAdmin(adminId: any) {
    return this.client.delete(`${this.baseUrl}/${adminId}`);
  }
}
