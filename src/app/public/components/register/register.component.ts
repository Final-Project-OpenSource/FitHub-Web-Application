import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatOption, MatSelect} from "@angular/material/select";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-register',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MatFormFieldModule, MatButton, MatInput, ReactiveFormsModule, CommonModule, MatSelect, MatOption, LoadingSpinnerComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registerError: string | null = null;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      role: ['', Validators.required]
    });
  }
  onLoginClick() {
    this.router.navigate(['login']);
  }
  onSubmit(): void {
    this.registerError = null; // Resetea cualquier error previo

    if (this.registerForm.valid) {
      this.isLoading = true; // Mostrar el spinner de carga
      const userData = {
        username: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phoneNumber: this.registerForm.value.phone,
        roles: [this.registerForm.value.role]
      };

      this.authService.signUp(userData).subscribe(response => {
        console.log('Registration successful', response);
        this.snackBar.open('Usuario registrado con éxito', '', {
          duration: 3000, // Duración del snackbar
        }).afterDismissed().subscribe(() => {
          this.router.navigate(['login']); // Redirigir al login después de cerrar el snackbar
        });

        this.registerForm.reset();
        this.isLoading = false; // Ocultar el spinner de carga
      }, error => {
        console.error('Registration failed', error);
        this.registerError = 'No se pudo registrar el usuario. Intente de nuevo más tarde.';
        this.isLoading = false; // Ocultar el spinner de carga
      });
    } else {
      this.registerError = 'Por favor complete todos los campos correctamente.';
    }
  }
}
