import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem';
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

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getMenu();
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
}
