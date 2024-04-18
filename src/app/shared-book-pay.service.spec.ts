import { TestBed } from '@angular/core/testing';

import { SharedBookPayService } from './shared-book-pay.service';

describe('SharedBookPayService', () => {
  let service: SharedBookPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBookPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
