import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMenuItem } from 'src/app/models/menuItem';
import { AdminService } from 'src/app/services/admin.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css'],
})
export class AddMenuItemComponent {
  constructor(
    private adminService: AdminService,
    private menuService: MenuService
  ) {}

  itemForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]),
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
  });

  get getName() {
    return this.itemForm.controls['title'];
  }
  get getDescription() {
    return this.itemForm.controls['description'];
  }
  get getPrice() {
    return this.itemForm.controls['price'];
  }
  get getImage() {
    return this.itemForm.controls['image'];
  }
  get getCategory() {
    return this.itemForm.controls['category'];
  }
  get getState() {
    return this.itemForm.controls['state'];
  }

  addMenuItem() {
    this.menuService.addMenuItem(this.itemForm.value).subscribe((response) => {
      console.log(response);
    });
  }
}
