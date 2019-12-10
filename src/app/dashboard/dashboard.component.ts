import { Router } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { ClockingService } from '../services/clocking/clocking.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})


export class DashboardComponent implements OnInit {

  username: string;
  dateTime: string;
  startTime: string;
  loading = false;
  error = '';
  clockedIn: boolean;

  constructor(private authenticationService: AuthenticationService, private clockingService: ClockingService, private router: Router) {}

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.dateTime = new Date().toUTCString();
    this.clockingService.getStatus(this.username).pipe().subscribe(
      data => {
        console.log(data);
        if (data.start_time != null) {
          this.clockedIn = true;
          this.startTime = data.start_time;
        } else {
          this.clockedIn = false;
        }
        return data;
      });
  }

  logout() {
    this.authenticationService.logOut();
  }

  clockOut() {
  }

  clockIn() {
     this.clockingService.clockIn(this.username).pipe(first())
     .subscribe(
         data => {
            console.log(data);
         },
         error => {
             this.error = error;
             this.loading = false;
         });
  }
}
