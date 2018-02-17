import { TestBed, inject } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  const mockDate = new Date(2018,0,1);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService]
    });
    jasmine.clock().mockDate(mockDate);
  });

  it('should be created', inject([DateService], (service: DateService) => {
    expect(service).toBeTruthy();
  }));

  it('should return correctly formatted date 01.01.2018', inject([DateService], (service: DateService) => {
    expect(service.getFormattedDate()).toBe('01.01.2018');
  }));

  it('should return correctly formatted date 31.12.2018', inject([DateService], (service: DateService) => {
    jasmine.clock().mockDate(new Date(2018,11,31));
    expect(service.getFormattedDate()).toBe('31.12.2018');
  }));

  it('should return correctly day 31', inject([DateService], (service: DateService) => {
    jasmine.clock().mockDate(new Date(2018,11,31));
    expect(service.getFormattedDate()).toBe('31.12.2018');
  }));
});
