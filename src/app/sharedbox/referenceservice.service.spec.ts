import { TestBed, inject } from '@angular/core/testing';

import { ReferenceserviceService } from './referenceservice.service';

describe('ReferenceserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceserviceService]
    });
  });

  it('should be created', inject([ReferenceserviceService], (service: ReferenceserviceService) => {
    expect(service).toBeTruthy();
  }));
});
