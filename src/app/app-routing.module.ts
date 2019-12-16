import { HourComponent } from './hour/hour.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccessGuard } from './services/authentication/AccessGuard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AccessGuard]},
  { path: 'account', component: AccountComponent, canActivate: [AccessGuard]},
  { path: 'hours', component: HourComponent, canActivate: [AccessGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
