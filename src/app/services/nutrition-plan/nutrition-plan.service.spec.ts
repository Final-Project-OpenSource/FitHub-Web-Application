import { TestBed } from '@angular/core/testing';

import { NutritionPlanService } from './nutrition-plan.service';

describe('NutritionPlanService', () => {
  let service: NutritionPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
