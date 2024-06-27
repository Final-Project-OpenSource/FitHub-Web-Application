import {Component, OnInit} from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-member-profile',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './member-profile.component.html',
  styleUrl: './member-profile.component.css'
})
export class MemberProfileComponent implements OnInit {
  profileForm: FormGroup;
  isEditing: boolean = false;
  userProfile: any = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      pais: [''],
      direccion: [''],
      correo: ['']
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  onLandingPageClick() {
    this.router.navigate(['']);
  }

  loadUserProfile() {
    this.http.get('/api/user-profile').subscribe((data: any) => {
      this.userProfile = data;
      this.profileForm.patchValue(data);
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.http.put('/api/user-profile', this.profileForm.value).subscribe(response => {
        this.userProfile = this.profileForm.value;
        this.isEditing = false;
        console.log('Profile updated successfully');
      });
    }
  }
}
