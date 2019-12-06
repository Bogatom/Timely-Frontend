import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    declarations: [

    ],
    providers: [ CookieService]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
