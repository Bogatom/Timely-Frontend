import { HourComponent } from './../hour/hour.component';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { LoginComponent } from './../login/login.component';
import { AppRoutingModule } from './../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountComponent } from './account.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientTestingModule      ],
      declarations: [
        LoginComponent,
        DashboardComponent,
        AccountComponent,
        HourComponent
      ],
      providers: [
        {
          provide: APP_BASE_HREF, useValue: '/'
        },
        CookieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
