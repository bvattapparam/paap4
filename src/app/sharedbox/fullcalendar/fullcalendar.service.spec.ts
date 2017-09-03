import { TestBed, inject } from '@angular/core/testing';

import { FullcalendarService } from './fullcalendar.service';

describe('FullcalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullcalendarService]
    });
  });

  it('should be created', inject([FullcalendarService], (service: FullcalendarService) => {
    expect(service).toBeTruthy();
  }));
});
