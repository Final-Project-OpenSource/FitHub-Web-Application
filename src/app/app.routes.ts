import { Routes } from '@angular/router';
import {LoginComponent} from "./public/components/login/login.component";
import {RegisterComponent} from "./public/components/register/register.component";
import {RecoveryPasswordComponent} from "./public/components/recovery-password/recovery-password.component";
import {LandingPageComponent} from "./public/components/landing-page/landing-page.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recovery-password', component: RecoveryPasswordComponent},
  {path: '', pathMatch: 'full', component: LandingPageComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'home'}
];
