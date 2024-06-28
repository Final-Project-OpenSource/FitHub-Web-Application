import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogTitle
  ],
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent {
  message: string = '';

  constructor(
    public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { coachId: number, nombre: string },
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendRequest(): void {
    const result = {
      event: 'confirm',
      coachId: this.data.coachId,
      message: this.message
    };
    this.dialogRef.close(result);
  }
}
