import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../../services/progress/progress.service';
import { CoachService } from '../../../coach/service/coach-service.service';
import { Progress } from '../../../shared/model/progress.model';
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { RouterLink } from "@angular/router";
import {CommonModule, DatePipe, NgForOf} from "@angular/common";
import { Coach } from '../../../coach/model/coach.model';
import { Member } from '../../../member/model/member.model';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-member-progress',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    RouterLink,
    DatePipe,
    NgForOf,
    CommonModule
  ],
  templateUrl: './member-progress.component.html',
  styleUrls: ['./member-progress.component.css']
})
export class MemberProgressComponent implements OnInit {
  progressList: Progress[] = [];
  coachName: string = '';

  constructor(private progressService: ProgressService, private coachService: CoachService) {}

  ngOnInit(): void {
    const clientId = 1; // Obtener el ID del cliente de manera adecuada
    const coachId = 1; // Obtener el ID del coach de manera adecuada
    this.loadProgress(clientId, coachId);
    this.loadCoachName(coachId);
  }

  // Datos ficticios para usuarios
  user1 = new User(
    1,
    'Maria',
    'Lopez',
    'Av. Los Jardines 123',
    'Perú',
    'maria.lopez@example.com',
    'maria.lopez.recovery@example.com',
    'password123',
    '920 123 456',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
    '2020-05-20',
    2
  );

  user2 = new User(
    2,
    'John',
    'Doe',
    'Av. Principal 456',
    'México',
    'john.doe@example.com',
    'john.doe.recovery@example.com',
    'password456',
    '123 456 789',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
    '2023-01-15',
    1
  );

  user3 = new User(
    3,
    'Jane',
    'Smith',
    'Av. Secundaria 789',
    'Chile',
    'jane.smith@example.com',
    'jane.smith.recovery@example.com',
    'password789',
    '987 654 321',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
    '2023-02-20',
    2
  );

  // Datos ficticios para miembros
  member1 = new Member(
    1,
    'Pérdida de peso',
    this.user2
  );

  member2 = new Member(
    2,
    'Salud general',
    this.user3
  );

  // Datos ficticios para coaches
  coach1 = new Coach(
    1,
    '10',
    'Nutrición Deportiva',
    'Certificación Internacional',
    this.user1
  );

  // Datos ficticios para progreso
  progressListFictitious: Progress[] = [
    new Progress(1, 'Has mejorado en tus ejercicios de fuerza.', '2023-06-25', this.coach1, this.member1),
    new Progress(2, 'Buen progreso en tu plan de nutrición.', '2023-06-26', this.coach1, this.member2)
  ];

  loadProgress(clientId: number, coachId: number): void {
    this.progressList = this.progressListFictitious; // Usando datos ficticios
    // Descomenta esta línea para usar el servicio
    // this.progressService.getProgressByClientIdAndCoachId(clientId, coachId).subscribe(data => {
    //   this.progressList = data;
    // });
  }

  loadCoachName(coachId: number): void {
    this.coachName = this.coach1.user.name; // Usando datos ficticios
    // Descomenta esta línea para usar el servicio
    // this.coachService.getCoachById(coachId).subscribe(coach => {
    //   this.coachName = coach.user.name;
    // });
  }
}
