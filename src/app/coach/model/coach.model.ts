import { User } from '../../shared/model/user.model';

export class Coach {
  constructor(
    public id: number,
    public yearsExperience: string,
    public specialty: string,
    public certification: string,
    public user: User
  ) {}
}
