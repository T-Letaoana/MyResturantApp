import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page';
import { MenuComponent } from './menu/menu';
import { ReservationComponent } from './reservation/reservation';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent },
];