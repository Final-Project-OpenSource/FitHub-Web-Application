import {Member} from "../../member/model/member.model";
import {Coach} from "../../coach/model/coach.model";

export class NutritionPlan {
  id: number;
  title: string;
  photo: string;
  description: string;
  ingredients: string;
  restrictions: string;
  calories: string;
  goal_health: string;
  coach: Coach;
  member?: Member;

  constructor(id: number, title: string, photo: string, description: string, ingredients: string, restrictions: string, calories: string, goal_health: string, coach: Coach, member: Member) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.description = description;
    this.ingredients = ingredients;
    this.restrictions = restrictions;
    this.calories = calories;
    this.goal_health = goal_health;
    this.coach = coach;
    this.member = member;
  }
}
