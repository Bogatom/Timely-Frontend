import { ClockingService } from './../services/clocking/clocking.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output} from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

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

  constructor(private authenticationService: AuthenticationService, private clockingService: ClockingService, private router: Router) {
    this.username = sessionStorage.getItem('username');
  }

  ngOnInit() {
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
