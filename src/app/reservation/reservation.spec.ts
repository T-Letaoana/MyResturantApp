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

  it('should update name signal', () => {
    const fixture = TestBed.createComponent(ReservationComponent);
    const component = fixture.componentInstance;

    component.name.set('Thato');
    expect(component.name()).toBe('Thato');
  });

  it('should compute reservation summary', () => {
    const fixture = TestBed.createComponent(ReservationComponent);
    const component = fixture.componentInstance;

    component.name.set('Thato');
    component.guests.set(3);

    expect(component.reservationSummary()).toBe('Thato - 3 guest(s)');
  });

});