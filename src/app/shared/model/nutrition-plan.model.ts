export class NutritionPlan {
  id: number;
  title: string;
  photo: string;
  description: string;
  ingredients: string;
  restrictions: string;
  calories: string;
  goal_health: string;
  coach_id: number;
  client_id: number;

  constructor(id: number, title: string, photo: string, description: string, ingredients: string, restrictions: string, calories: string, goal_health: string, coach_id: number, client_id: number) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.description = description;
    this.ingredients = ingredients;
    this.restrictions = restrictions;
    this.calories = calories;
    this.goal_health = goal_health;
    this.coach_id = coach_id;
    this.client_id = client_id;
  }
}
