import { TestBed, inject } from '@angular/core/testing';

import { FlatpaymentService } from './flatpayment.service';

describe('FlatpaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatpaymentService]
    });
  });

  it('should be created', inject([FlatpaymentService], (service: FlatpaymentService) => {
    expect(service).toBeTruthy();
  }));
});
