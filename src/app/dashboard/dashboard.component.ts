import { UserService } from './../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { ClockingService } from '../services/clocking/clocking.service';
import { first } from 'rxjs/operators';
import { IfStmt } from '@angular/compiler';

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
  isAdmin: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private clockingService: ClockingService,
    private router: Router ) {}

  ngOnInit() {
    this.clockedIn = false;
    this.username = sessionStorage.getItem('username');
    this.dateTime = new Date().toLocaleString();
    this.userService.getUserDetails(this.username).pipe()
    .subscribe(
        data => {
          if (data.roles == 'ADMIN') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
          console.log(data);
          return data;
        }
    );
    this.clockingService.getStatus(this.username).pipe().subscribe(
      data => {
        console.log(data);

        if (data.start_time == null && data.end_time == null) {
          this.isAdmin = data.admin;
          return this.clockedIn = false;
        }

        if (data.start_time == null) {
          this.isAdmin = data.admin;
          return this.clockedIn = true;
        }

        if (data.end_time == null) {
          this.clockedIn = true;
          this.isAdmin = data.admin;
          return this.startTime = data.start_time;
        } else {
          this.isAdmin = data.admin;
          return this.clockedIn = false;
        }
      });
  }

  logout() {
    this.authenticationService.logOut();
  }

  async clockOut() {
    this.clockingService.clockOut(this.username).pipe(first())
     .subscribe(
         data => {
            console.log(data);
            window.location.reload();
         },
         error => {
             this.error = error;
             this.loading = false;
         });
  }

  async clockIn() {
     this.clockingService.clockIn(this.username).pipe(first())
     .subscribe(
         data => {
            console.log(data);
            window.location.reload();
         },
         error => {
             this.error = error;
             this.loading = false;
         });
  }
}
