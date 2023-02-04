import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent {
  constructor() {}
  reservationForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{11}$/),
    ]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });

  get getFName() {
    return this.reservationForm.controls['firstName'];
  }
  get getLName() {
    return this.reservationForm.controls['lastName'];
  }
  get getEmail() {
    return this.reservationForm.controls['email'];
  }
  get getPhoneNumber() {
    return this.reservationForm.controls['phoneNumber'];
  }
  get getDate() {
    return this.reservationForm.controls['date'];
  }
  get getTime() {
    return this.reservationForm.controls['time'];
  }
}
