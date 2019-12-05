import { TestBed } from '@angular/core/testing';

import { ClockingService } from './clocking.service';

describe('ClockingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockingService = TestBed.get(ClockingService);
    expect(service).toBeTruthy();
  });
});
