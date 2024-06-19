import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MatFormFieldModule, MatButton, MatInput, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
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
    if (this.loginForm.valid) {
      this.http.post('https://api.example.com/login', this.loginForm.value).subscribe((response: any) => {
        // Suponiendo que la respuesta contiene el rol del usuario
        const userRole = response.role;

        // Redirigir basado en el rol
        if (userRole === 'coach') {
          this.router.navigate(['coach-dashboard']);
        } else if (userRole === 'user') {
          this.router.navigate(['user-dashboard']);
        }

        // Limpiar el formulario después del login
        this.loginForm.reset();
      }, error => {
        console.error('Login failed', error);
        // Manejo de errores (opcional)
      });
    }
  }
}
