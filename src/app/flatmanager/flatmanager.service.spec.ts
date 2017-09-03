import { TestBed, inject } from '@angular/core/testing';

import { FlatmanagerService } from './flatmanager.service';

describe('FlatmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatmanagerService]
    });
  });

  it('should be created', inject([FlatmanagerService], (service: FlatmanagerService) => {
    expect(service).toBeTruthy();
  }));
});
