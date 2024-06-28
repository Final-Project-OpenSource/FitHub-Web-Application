import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-coach-profile',
  standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './coach-profile.component.html',
  styleUrl: './coach-profile.component.css'
})
export class CoachProfileComponent {
  constructor(private router: Router) { }
  onLandingPageClick() {
    this.router.navigate(['']);
  }
}
