export class Routine {
  id: number;
  name: string;
  exercise: string;
  repetitions: string;
  photo: string;
  instruction: string;
  coach_id: number;
  client_id: number;

  constructor(id: number, name: string, exercise: string, repetitions: string, photo: string, instruction: string, coach_id: number, client_id: number) {
    this.id = id;
    this.name = name;
    this.exercise = exercise;
    this.repetitions = repetitions;
    this.photo = photo;
    this.instruction = instruction;
    this.coach_id = coach_id;
    this.client_id = client_id;
  }
}
