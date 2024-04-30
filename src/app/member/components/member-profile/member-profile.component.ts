import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-member-profile',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './member-profile.component.html',
  styleUrl: './member-profile.component.css'
})
export class MemberProfileComponent {
  constructor(private router: Router) { }
  onLandingPageClick() {
    this.router.navigate(['']);
  }

}
