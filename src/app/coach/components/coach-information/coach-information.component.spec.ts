import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachInformationComponent } from './coach-information.component';

describe('CoachInformationComponent', () => {
  let component: CoachInformationComponent;
  let fixture: ComponentFixture<CoachInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoachInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
