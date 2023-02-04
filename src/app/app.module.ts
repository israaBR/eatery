import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddMenuItemComponent } from './components/add-menu-item/add-menu-item.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { MenuService } from './services/menu.service';
import { CustomerService } from './services/customer.service';
import { AdminService } from './services/admin.service';
import { CartService } from './services/cart.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignUpFormComponent },
  { path: 'add-menu-item', component: AddMenuItemComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    GroupsComponent,
    ReservationsComponent,
    CartComponent,
    MenuItemComponent,
    NotFoundComponent,
    AddMenuItemComponent,
    LoginFormComponent,
    SignUpFormComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MenuService, CustomerService, AdminService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
