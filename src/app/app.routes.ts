import { Routes } from '@angular/router';
import {LoginComponent} from "./public/components/login/login.component";
import {RegisterComponent} from "./public/components/register/register.component";
import {RecoveryPasswordComponent} from "./public/components/recovery-password/recovery-password.component";
import {LandingPageComponent} from "./public/components/landing-page/landing-page.component";
import {InicioComponent} from "./public/components/inicio/inicio.component";
import {CoachInformationComponent} from "./coach/components/coach-information/coach-information.component";
import {CoachContactComponent} from "./coach/components/coach-contact/coach-contact.component";
import {CoachProgressComponent} from "./coach/components/coach-progress/coach-progress.component";

import { MemberProfileComponent } from "./member/components/member-profile/member-profile.component";
import { CoachProfileComponent } from "./coach/components/coach-profile/coach-profile.component";

import { MemberDashboardComponent} from "./member/components/member-dashboard/member-dashboard.component";
import { MemberTrainingsComponent} from "./member/components/member-trainings/member-trainings.component";
import {CoachMemberListComponent} from "./coach/components/coach-member-list/coach-member-list.component";
import {CoachPlansComponent} from "./coach/components/coach-plans/coach-plans.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recovery-password', component: RecoveryPasswordComponent},

  {path: 'coach', component: CoachInformationComponent},
  {path: 'contact-coach', component: CoachContactComponent},
  {path: 'home', component: InicioComponent},
  {path: 'member-dashboard', component: MemberDashboardComponent},
  {path: 'member-trainings', component: MemberTrainingsComponent},

  {path: 'member-profile', component: MemberProfileComponent},
  {path: 'coach-profile', component: CoachProfileComponent},
  {path: 'coach-progress', component: CoachProgressComponent},
  {path: 'coach-member-list', component: CoachMemberListComponent},
  {path: 'coach-plans', component: CoachPlansComponent},
  {path: '', pathMatch: 'full', component: LandingPageComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'home'}
];
