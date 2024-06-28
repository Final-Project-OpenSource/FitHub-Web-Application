import {Coach} from "../../coach/model/coach.model";
import {Member} from "../../member/model/member.model";

export class Routine {
  id: number;
  name: string;
  exercise: string;
  repetitions: string;
  photo: string;
  instruction: string;
  coach: Coach;
  member?: Member;

  constructor(id: number, name: string, exercise: string, repetitions: string, photo: string, instruction: string, coach: Coach, member: Member) {
    this.id = id;
    this.name = name;
    this.exercise = exercise;
    this.repetitions = repetitions;
    this.photo = photo;
    this.instruction = instruction;
    this.coach = coach;
    this.member = member;
  }
}
