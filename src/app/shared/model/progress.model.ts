export class Progress {
  id: number;
  content: string;
  date: string;
  coach_id: number;
  client_id: number;

  constructor(id: number, content: string, date: string, coach_id: number, client_id: number) {
    this.id = id;
    this.content = content;
    this.date = date;
    this.coach_id = coach_id;
    this.client_id = client_id;
  }
}

