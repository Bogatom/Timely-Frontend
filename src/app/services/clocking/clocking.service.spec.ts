import { TestBed } from '@angular/core/testing';

import { ClockingService } from './clocking.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClockingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    declarations: [

    ],
    providers: []
  }));

  it('should be created', () => {
    const service: ClockingService = TestBed.get(ClockingService);
    expect(service).toBeTruthy();
  });
});
