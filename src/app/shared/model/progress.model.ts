import {Coach} from "../../coach/model/coach.model";
import {Member} from "../../member/model/member.model";

export class Progress {
  id: number;
  content: string;
  date: string;
  coach: Coach;
  member: Member;

  constructor(id: number, content: string, date: string, coach: Coach, member: Member) {
    this.id = id;
    this.content = content;
    this.date = date;
    this.coach = coach;
    this.member = member;
  }
}

