import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachNutritionComponent } from './coach-nutrition.component';

describe('CoachNutritionComponent', () => {
  let component: CoachNutritionComponent;
  let fixture: ComponentFixture<CoachNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachNutritionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoachNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
