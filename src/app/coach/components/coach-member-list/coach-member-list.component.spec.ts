import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachMemberListComponent } from './coach-member-list.component';

describe('CoachMemberListComponent', () => {
  let component: CoachMemberListComponent;
  let fixture: ComponentFixture<CoachMemberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachMemberListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoachMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
