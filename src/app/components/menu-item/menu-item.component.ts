import { Component, Input } from '@angular/core';
import { ICart } from 'src/app/models/cart';
import { IMenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() item: IMenuItem = {
    _id: '',
    title: '',
    description: '',
    image: '',
    price: 0,
    state: '',
    category: '',
  };

  constructor() {}

  addToCart() {
    console.log('add to cart', this.item._id);
  }
}
