import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeedbackPageComponent } from './student-feedback-page.component';

describe('StudentFeedbackPageComponent', () => {
  let component: StudentFeedbackPageComponent;
  let fixture: ComponentFixture<StudentFeedbackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFeedbackPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
