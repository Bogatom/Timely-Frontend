import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  getUserDetails(username: string): Observable<User> {
    return this.http.get<User>('http://localhost:8080/user/' + username);
  }
}
