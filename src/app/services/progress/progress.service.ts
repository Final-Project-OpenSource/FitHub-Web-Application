import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() { }

  getProgressData() {
    return [
      {
        coach: 'Juan Perez',
        comments: [
          { message: 'Sigue así, vas muy bien!', date: '27/05/24' },
          { message: 'Necesitas mejorar en tu dieta.', date: '22/05/24' },
          { message: 'Excelente progreso esta semana.', date: '20/05/24' }
        ]
      },
      {
        coach: 'Martin Mendoza',
        comments: [
          { message: 'Cumplió durante un mes su primera dieta brindada.', date: '27/05/24' },
          { message: 'Realizó 3 de 5 días de ejercicios.', date: '22/05/24' },
          { message: 'Completó satisfactoriamente su primera semana de ejercicios.', date: '20/05/24' }
        ]
      },
      {
        coach: 'Liset Flores',
        comments: [
          { message: 'Sigue así, vas muy bien!', date: '27/05/24' },
          { message: 'Necesitas mejorar en tu dieta.', date: '22/05/24' },
          { message: 'Excelente progreso esta semana.', date: '20/05/24' }
        ]
      },
      {
        coach: 'Ximena Lopez',
        comments: [
          { message: 'Cumplió durante un mes su primera dieta brindada.', date: '27/05/24' },
          { message: 'Realizó 3 de 5 días de ejercicios.', date: '22/05/24' },
          { message: 'Completó satisfactoriamente su primera semana de ejercicios.', date: '20/05/24' }
        ]
      },
      {
        coach: 'Juan Reyes',
        comments: [
          { message: 'Cumplió durante un mes su primera dieta brindada.', date: '27/05/24' },
          { message: 'Realizó 3 de 5 días de ejercicios.', date: '22/05/24' },
          { message: 'Completó satisfactoriamente su primera semana de ejercicios.', date: '20/05/24' }
        ]
      }
    ];
  }
}
