import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
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

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_2rucpr5', 'template_iivhm4f', e.target as HTMLFormElement, {
        publicKey: 'Olwd6HmB58xgNfeFs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
