import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgCarouselComponent } from './pkg-carousel.component';

describe('PkgCarouselComponent', () => {
  let component: PkgCarouselComponent;
  let fixture: ComponentFixture<PkgCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PkgCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PkgCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
