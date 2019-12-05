import { AuthenticationService } from './authentication/authentication.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json;',
        // tslint:disable-next-line: object-literal-key-quotes
        'Accept'       : 'application/json',
        // tslint:disable-next-line: object-literal-key-quotes
        Authorization: `Bearer ${this.authService.getToken()}`
      },
    });
    return next.handle(req);
  }
}
