import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormsComponent } from './feedback-forms.component';

describe('FeedbackFormsComponent', () => {
  let component: FeedbackFormsComponent;
  let fixture: ComponentFixture<FeedbackFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
