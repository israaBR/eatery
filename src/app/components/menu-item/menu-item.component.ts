import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() item: IMenuItem = {
    title: '',
    description: '',
    image: '',
    price: 0,
    state: '',
    category: '',
  };
  constructor() {}
}
