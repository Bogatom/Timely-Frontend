import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClockingService {

  constructor(private http: HttpClient) { }

  clockIn(username: string) {
    return this.http.post<any>('http://localhost:8080/user/addStartTime', {username});
  }
}
