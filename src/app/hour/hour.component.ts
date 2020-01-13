import { UserService } from './../services/user/user.service';
import { ClockingService } from './../services/clocking/clocking.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output} from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})


export class HourComponent implements OnInit {
  dataSource = [];
  tableColumns: string[] = ['Date', 'StartTime', 'EndTime', 'Hours'];
  username: string;
  hours: number;
  workedTime: string;
  isAdmin: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private clockingService: ClockingService,
    private router: Router) {
    this.username = sessionStorage.getItem('username');
  }

  ngOnInit() {
    this.userService.getUserDetails(this.username).pipe()
    .subscribe(
        data => {
          if (data.roles == 'ADMIN') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
          console.log(this.isAdmin);
          return data;
        }
    );
    this.clockingService.getHours(this.username).pipe().subscribe(
      data => {
        console.log(data);
        this.dataSource = data;
      });
  }

  logout() {
    this.authenticationService.logOut();
  }
}
