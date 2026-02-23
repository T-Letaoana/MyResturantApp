import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrls: ['./reservation.scss']
})
export class ReservationComponent {

  reservation = {
    name: '',
    date: '',
    guests: 1
  };

  submit() {
    alert(`Reservation made for ${this.reservation.name}`);
  }
}