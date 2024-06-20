import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChatComponent } from './component-chat.component';

describe('ComponentChatComponent', () => {
  let component: ComponentChatComponent;
  let fixture: ComponentFixture<ComponentChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
