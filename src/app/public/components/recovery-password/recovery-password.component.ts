import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatButton} from "@angular/material/button";
import {MatError, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [
    MatButton,
    MatFormFieldModule,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    CommonModule,
    MatError
  ],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.css'
})
export class RecoveryPasswordComponent {
  recoveryForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onRecover() {
    if (this.recoveryForm.valid) {
      this.http.put('https://api.example.com/recover-password', this.recoveryForm.value).subscribe({
        next: response => {
          console.log('Recovery successful', response);
          this.recoveryForm.reset();
          this.router.navigate(['login']);
        },
        error: error => {
          console.error('Recovery failed', error);
          this.errorMessage = 'Error al recuperar la contraseña. Por favor, inténtelo de nuevo.';
        }
      });
    }
  }
}
