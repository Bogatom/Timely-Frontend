import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export class User {
  constructor(
    public status: string,
     ) {}
}
export class JwtResponse {
  constructor(
    public jwttoken: string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  private currentUserSubject: BehaviorSubject<User>;

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/authenticate', {username, password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', userData.token);
        this.isLoggedIn = true;
        return userData;
       }
     )
    );
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

    logOut() {
      this.isLoggedIn = false;
      this.cookieService.delete('token');
    }
}
