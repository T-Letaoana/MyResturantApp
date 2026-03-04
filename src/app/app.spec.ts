import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navbar title', () => {
    const heading = compiled.querySelector('h1');
    expect(heading?.textContent?.trim())
      .toBe('Mzansi Kasi Kitchen 🇿🇦');
  });

  it('should render three navigation links', () => {
    const links = compiled.querySelectorAll('a');
    expect(links.length).toBe(3);
  });

  it('should render correct navigation labels', () => {
    const links = compiled.querySelectorAll('a');

    expect(links[0].textContent?.trim()).toBe('Home');
    expect(links[1].textContent?.trim()).toBe('Menu');
    expect(links[2].textContent?.trim()).toBe('Reservation');
  });

  it('should have correct href values', () => {
    const links = compiled.querySelectorAll('a');

    expect(links[0].getAttribute('href')).toBe('/');
    expect(links[1].getAttribute('href')).toBe('/menu');
    expect(links[2].getAttribute('href')).toBe('/reservation');
  });

  it('should contain router outlet', () => {
    const outlet = compiled.querySelector('router-outlet');
    expect(outlet).toBeTruthy();
  });
});