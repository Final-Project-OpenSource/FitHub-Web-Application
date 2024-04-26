import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatButton,
    MatCard
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  isMenuOpen: boolean = false;
  constructor(private router: Router) { }
  onLoginClick() {
    this.router.navigate(['login']);
  }

}
