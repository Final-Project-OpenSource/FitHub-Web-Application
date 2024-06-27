import { User } from '../../shared/model/user.model';

export class Member {
  constructor(
    public id: number,
    public goal_health: string,
    public user: User
  ) {}
}
