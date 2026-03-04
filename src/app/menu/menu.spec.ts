import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MenuComponent } from './menu';

describe('Menu', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent], // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the menu heading', () => {
    const heading = compiled.querySelector('h2');
    expect(heading?.textContent?.trim()).toBe('Our Menu');
  });

  it('should render 5 menu cards', () => {
    const cards = compiled.querySelectorAll('.card');
    expect(cards.length).toBe(5);
  });

  it('should display Bunny Chow correctly', () => {
    const firstCard = compiled.querySelectorAll('.card')[0];
    expect(firstCard.textContent).toContain('Bunny Chow');
    expect(firstCard.textContent).toContain('R85');
  });

  it('should display Shisa Nyama Platter correctly', () => {
    expect(compiled.textContent).toContain('Shisa Nyama Platter');
    expect(compiled.textContent).toContain('R120');
  });

  it('should display Boerewors Roll correctly', () => {
    expect(compiled.textContent).toContain('Boerewors Roll');
    expect(compiled.textContent).toContain('R60');
  });

  it('should display Chicken Feet correctly', () => {
    expect(compiled.textContent).toContain('Chicken Feet');
    expect(compiled.textContent).toContain('R40');
  });

  it('should display Biltong correctly', () => {
    expect(compiled.textContent).toContain('Biltong');
  });

  it('should have images with alt attributes', () => {
    const images = compiled.querySelectorAll('img');
    images.forEach((img) => {
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });
});