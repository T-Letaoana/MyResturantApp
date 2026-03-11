import { TestBed } from '@angular/core/testing';
import { ReservationComponent } from './reservation';

describe('ReservationComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ReservationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should compute reservation summary', () => {
    const fixture = TestBed.createComponent(ReservationComponent);
    const component = fixture.componentInstance;

    component.name.set('Thato');
    component.guests.set(3);

    expect(component.reservationSummary()).toBe('Thato - 3 guest(s)');
  });

  it('should call alert when submitting reservation', () => {
    const fixture = TestBed.createComponent(ReservationComponent);
    const component = fixture.componentInstance;

    spyOn(window, 'alert');

    component.name.set('Thato');
    component.submit();

    expect(window.alert).toHaveBeenCalledWith('Reservation made for Thato');
  });

});

function spyOn(window: Window & typeof globalThis, arg1: string) {
  throw new Error('Function not implemented.');
}
