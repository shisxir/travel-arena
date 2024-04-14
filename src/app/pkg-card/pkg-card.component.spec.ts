import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgCardComponent } from './pkg-card.component';

describe('PkgCardComponent', () => {
  let component: PkgCardComponent;
  let fixture: ComponentFixture<PkgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PkgCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PkgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
