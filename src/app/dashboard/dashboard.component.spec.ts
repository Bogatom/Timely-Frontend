import { HourComponent } from './../hour/hour.component';
import { CookieService } from 'ngx-cookie-service';
import { AccountComponent } from './../account/account.component';
import { LoginComponent } from './../login/login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
