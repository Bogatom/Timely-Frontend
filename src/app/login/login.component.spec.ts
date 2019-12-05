import { CookieService } from 'ngx-cookie-service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        CookieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
