import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import {MatButton} from "@angular/material/button";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatCard} from "@angular/material/card"; // Ajusta el path según tu estructura

@Component({
  selector: 'app-coach-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatButtonToggle,
    MatButton
  ],
  templateUrl: './coach-dashboard.component.html',
  styleUrls: ['./coach-dashboard.component.css']
})
export class CoachDashboardComponent implements OnInit {
  userRole: string = '';
  userId: number = 0;
  isRoleLoaded: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.getUserRole();
  }

  getUserRole() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (userId && token) {
      this.userId = +userId; // Convertir el ID a número
      this.authService.getUserInfo(this.userId, token).subscribe((userInfo: any) => {
        console.log('User info:', userInfo);
        this.userRole = userInfo.roles[0];
        this.isRoleLoaded = true;
      }, error => {
        console.error('Failed to get user info', error);
      });
    }
  }

  onManageRoutines() {
    if (this.isRoleLoaded) { // Comprobar si el rol se ha cargado
      if (this.userRole === 'ROLE_FITNESS') {
        this.router.navigate(['coach-plans']);
      } else if (this.userRole === 'ROLE_NUTRITION') {
        this.router.navigate(['coach-nutrition-plans']);
      }
    } else {
      console.log('User role is not loaded yet.');
    }
  }
}
