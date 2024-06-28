import { Component, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-login',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MatFormFieldModule, MatButton, MatInput, ReactiveFormsModule, CommonModule, LoadingSpinnerComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegisterClick() {
    this.router.navigate(['register']);
  }

  onRecoveryPasswordClick() {
    this.router.navigate(['recovery-password']);
  }

  onLogin() {
    this.loginError = null; // Resetea cualquier error previo

    if (this.loginForm.valid) {
      this.isLoading = true; // Mostrar el spinner de carga
      const credentials = {
        username: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.signIn(credentials).subscribe((response: any) => {
        console.log('Login response:', response);

        const token = response.token;
        const userId = response.id;

        // Guarda el token en localStorage o en una variable de estado
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        // Obtén la información del usuario
        this.authService.getUserInfo(userId, token).subscribe((userInfo: any) => {
          console.log('User info:', userInfo);
          const userRole = userInfo.roles[0];

          // Redirigir basado en el rol
          if (userRole === 'ROLE_NUTRITION') {
            this.router.navigate(['coach-dashboard']);
          } else if (userRole === 'ROLE_MEMBER') {
            this.router.navigate(['member-dashboard']);
          } else if (userRole === 'ROLE_FITNESS') {
            this.router.navigate(['coach-dashboard']);
          }

          this.isLoading = false; // Ocultar el spinner de carga
          // Limpiar el formulario después del login
          this.loginForm.reset();
        }, error => {
          console.error('Failed to get user info', error);
          this.loginError = 'No se pudo obtener la información del usuario.';
          this.isLoading = false; // Ocultar el spinner de carga
        });
      }, error => {
        console.error('Login failed', error);
        this.handleLoginError(error);
        this.isLoading = false; // Ocultar el spinner de carga
      });
    } else {
      this.loginError = 'Por favor complete todos los campos correctamente.';
    }
  }

  private handleLoginError(error: any) {
    if (error.status === 401) {
      this.loginError = 'Correo o contraseña incorrectos.';
    } else {
      this.loginError = 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.';
    }
  }
}
