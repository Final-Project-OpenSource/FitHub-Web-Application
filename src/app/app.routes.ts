import { Routes } from '@angular/router';
import {LoginComponent} from "./public/components/login/login.component";
import {RegisterComponent} from "./public/components/register/register.component";
import {RecoveryPasswordComponent} from "./public/components/recovery-password/recovery-password.component";
import {LandingPageComponent} from "./public/components/landing-page/landing-page.component";
import {CoachInformationComponent} from "./coach/components/coach-information/coach-information.component";
import {CoachContactComponent} from "./coach/components/coach-contact/coach-contact.component";
import { MemberProfileComponent } from "./member/components/member-profile/member-profile.component";
import { CoachProfileComponent } from "./coach/components/coach-profile/coach-profile.component";
import { MemberDashboardComponent} from "./member/components/member-dashboard/member-dashboard.component";
import { MemberTrainingsComponent} from "./member/components/member-trainings/member-trainings.component";
import {CoachDashboardComponent} from "./coach/components/coach-dashboard/coach-dashboard.component";
import {CoachProgressComponent} from "./coach/components/coach-progress/coach-progress.component";
import {CoachMemberListComponent} from "./coach/components/coach-member-list/coach-member-list.component";
import {CoachPlansComponent} from "./coach/components/coach-plans/coach-plans.component";
import {CoachNutritionComponent} from "./coach/components/coach-nutrition/coach-nutrition.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recovery-password', component: RecoveryPasswordComponent},

  {path: 'member-dashboard', component: MemberDashboardComponent},
  {path: 'coach', component: CoachInformationComponent},
  {path: 'contact-coach', component: CoachContactComponent},
  {path: 'member-trainings', component: MemberTrainingsComponent},
  {path: 'member-profile', component: MemberProfileComponent},

  {path: 'coach-dashboard', component: CoachDashboardComponent},
  {path: 'coach-profile', component: CoachProfileComponent},
  {path: 'coach-progress', component: CoachProgressComponent},
  {path: 'coach-member-list', component: CoachMemberListComponent},
  {path: 'coach-plans', component: CoachPlansComponent},
  {path: 'coach-profile', component: CoachProfileComponent},
  {path: 'coach-nutrition-plan', component: CoachNutritionComponent},
  {path: '', pathMatch: 'full', component: LandingPageComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'home'}
];
