import { AuthenticationInterceptor } from './AuthenticationInterceptor';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';


describe('BasicAuthHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    declarations: [

    ],
    providers: [ CookieService]
  }));

  it('should be created', () => {
    const service: AuthenticationInterceptor = TestBed.get(AuthenticationInterceptor);
    expect(service).toBeTruthy();
  });
});
