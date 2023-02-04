import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css'],
})
export class AddMenuItemComponent {
  constructor(private adminService: AdminService) {}

  itemForm = new FormGroup({
    name: new FormControl('', [
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
  });

  get getName() {
    return this.itemForm.controls['name'];
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
}
