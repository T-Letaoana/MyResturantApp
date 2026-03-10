import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrls: ['./reservation.scss']
})
export class ReservationComponent {

  name = signal('');
  date = signal('');
  guests = signal(1);

  reservationSummary = computed(() =>
    `${this.name()} - ${this.guests()} guest(s)`
  );

  submit() {
    alert(`Reservation made for ${this.name()}`);
  }
}