import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  baseUrl = 'http://localhost:5000/menu';
  constructor(private client: HttpClient) {}

  getAllMenuItems() {
    return this.client.get(this.baseUrl);
  }
  getMenuItemById(itemId: any) {
    return this.client.get(`${this.baseUrl}/${itemId}`);
  }
  getMenuItemsByCategory(category: any) {
    return this.client.get(`${this.baseUrl}/category/${category}`);
  }
  addMenuItem(item: any) {
    return this.client.get(this.baseUrl, item);
  }
  editMenuItem(itemId: any, item: any) {
    return this.client.get(`${this.baseUrl}/${itemId}`, item);
  }
  deleteMenuItem(itemId: any) {
    return this.client.get(`${this.baseUrl}/${itemId}`);
  }
}
