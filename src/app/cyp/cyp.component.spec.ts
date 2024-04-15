import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypComponent } from './cyp.component';

describe('CypComponent', () => {
  let component: CypComponent;
  let fixture: ComponentFixture<CypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CypComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
