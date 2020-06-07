import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
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