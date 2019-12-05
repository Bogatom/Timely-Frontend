import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router, private cookieService: CookieService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const sessionToken = sessionStorage.getItem('token');
    const cookieToken = this.cookieService.get('token');

    if (cookieToken === sessionToken.toString()) {
      return true;
    } else {
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
    }
  }
}
