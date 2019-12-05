import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { LoginComponent } from './../login/login.component';
import { AppRoutingModule } from './../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountComponent } from './account.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
        HttpClientModule
      ],
      declarations: [
        LoginComponent,
        DashboardComponent,
        AccountComponent
      ],
      providers: [
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