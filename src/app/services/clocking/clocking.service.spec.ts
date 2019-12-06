import { TestBed } from '@angular/core/testing';

import { ClockingService } from './clocking.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ClockingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
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
