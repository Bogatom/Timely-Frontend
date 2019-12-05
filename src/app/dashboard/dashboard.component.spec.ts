import { CookieService } from 'ngx-cookie-service';
import { AccountComponent } from './../account/account.component';
import { LoginComponent } from './../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
