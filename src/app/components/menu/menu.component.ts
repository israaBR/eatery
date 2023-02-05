import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  small_plates: any = [];
  soups_and_salads: any = [];
  essentials: any = [];
  meat_and_fish: any = [];
  soft_drinks: any = [];
  desserts: any = [];

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {}
  @Input() cart: any = {
    _id: '',
    items: [],
  };
  @Output() cartCountChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.getMenu();
    this.cartService
      .getCartById('63dbce595003986176622629')
      .subscribe((response) => (this.cart = response));
  }
  getMenu() {
    this.menuService
      .getMenuItemsByCategory('small-plates')
      .subscribe((response) => {
        this.small_plates = response;
      });
    this.menuService
      .getMenuItemsByCategory('soups-and-salads')
      .subscribe((response) => {
        this.soups_and_salads = response;
      });
    this.menuService
      .getMenuItemsByCategory('essentials')
      .subscribe((response) => {
        this.essentials = response;
      });
    this.menuService
      .getMenuItemsByCategory('meat-and-fish')
      .subscribe((response) => {
        this.meat_and_fish = response;
      });
    this.menuService
      .getMenuItemsByCategory('soft-drinks')
      .subscribe((response) => {
        this.soft_drinks = response;
      });
    this.menuService
      .getMenuItemsByCategory('desserts')
      .subscribe((response) => {
        this.desserts = response;
      });
  }

  addToCart(itemId: string) {
    this.cart.items.push(itemId);
    this.cartService
      .editCart(this.cart._id, this.cart)
      .subscribe((reponse) => (this.cart = reponse));
  }
}
