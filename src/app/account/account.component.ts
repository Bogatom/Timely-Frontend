import { User } from './../models/user.model';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router, Resolve } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  username: string;
  user: User;

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.userService.getUserDetails(this.username).pipe()
    .subscribe(
        data => {
          console.log(data);
          this.user = data;
          return data;
        }
    );
  }

  constructor(private authenticationService: AuthenticationService, private userService: UserService, private router: Router) {

  }

  logout() {
    this.authenticationService.logOut();
  }
}
