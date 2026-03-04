import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomePageComponent } from './home-page';

describe('HomePage', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the welcome heading', () => {
    const heading = compiled.querySelector('h2');
    expect(heading?.textContent?.trim())
      .toBe('Welcome to Mzansi Kitchen');
  });

  it('should render the description paragraph', () => {
    const paragraph = compiled.querySelector('p');
    expect(paragraph?.textContent)
      .toContain('Experience authentic South African flavours made with love.');
  });

  it('should contain the home container div', () => {
    const container = compiled.querySelector('.home');
    expect(container).toBeTruthy();
  });
});