import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBetterComponent } from './footer-better.component';

describe('FooterBetterComponent', () => {
  let component: FooterBetterComponent;
  let fixture: ComponentFixture<FooterBetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterBetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
