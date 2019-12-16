import { AccessGuard } from './services/authentication/AccessGuard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { AuthenticationInterceptor } from './services/AuthenticationInterceptor';
import { APP_BASE_HREF } from '@angular/common';
import { HourComponent } from './hour/hour.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      AccountComponent,
      HourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi   : true,
   },
   {
     provide: APP_BASE_HREF,
     useValue : '/'
   },

   CookieService, AccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
