import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: User;
  private cookieValue: string;

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private cookieService: CookieService) {
    }

    public ngOnInit(): void {
      this.cookieValue = this.cookieService.get('token');
    }

    logout() {

    }
}


