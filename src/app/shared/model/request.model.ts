import {Member} from "../../member/model/member.model";
import {Coach} from "../../coach/model/coach.model";

export class Request {
  id: number;
  message: string;
  member: Member;
  coach: Coach;

  constructor(id: number, message: string, member: Member, coach: Coach) {
    this.id = id;
    this.message = message;
    this.member = member;
    this.coach = coach;
  }
}
