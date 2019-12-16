import { CookieService } from 'ngx-cookie-service';
import { AccountComponent } from './../account/account.component';
import { LoginComponent } from './../login/login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { HourComponent } from './hour.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

describe('HourComponent', () => {
  let component: HourComponent;
  let fixture: ComponentFixture<HourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        LoginComponent,
        DashboardComponent,
        AccountComponent,
        HourComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        CookieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
