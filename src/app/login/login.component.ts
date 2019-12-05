import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    hide = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private cookieService: CookieService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.loginForm.controls; }

  onLoginSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.authenticate(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.cookieService.set('token', data.token);
                this.router.navigate(['dashboard']);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }
}

