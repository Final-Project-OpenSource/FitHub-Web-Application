import {Component, ViewEncapsulation} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
    imports: [MatFormField, MatButton, MatInput, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  onRegisterClick() {
    this.router.navigate(['register']);
  }
  onRecoveryPasswordClick() {
    this.router.navigate(['recovery-password']);
  }
}
