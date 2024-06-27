export class Notification {
  id: number;
  title: string;
  content: string;
  user_type: string;
  coach_id: number;
  client_id: number;

  constructor(id: number, title: string, content: string, user_type: string, coach_id: number, client_id: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.user_type = user_type;
    this.coach_id = coach_id;
    this.client_id = client_id;
  }
}
