import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatOption,
    MatSelect,
    MatFormFieldModule,
    MatLabel,
    MatButton,
    MatInput,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  selectedRole: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      role: ['', Validators.required],
      specialty: ['']
    });
  }

  onRoleChange(role: string): void {
    this.selectedRole = role;
    const specialtyControl = this.registerForm.get('specialty');

    if (specialtyControl) {
      if (role === 'coach') {
        specialtyControl.setValidators([Validators.required]);
      } else {
        specialtyControl.clearValidators();
      }
      specialtyControl.updateValueAndValidity();
    }
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.http.post('https://api.example.com/register', this.registerForm.value).subscribe(response => {
        console.log('Registration successful', response);
        this.registerForm.reset();
        this.selectedRole = '';
      }, error => {
        console.error('Registration failed', error);
      });
    }
  }
}
