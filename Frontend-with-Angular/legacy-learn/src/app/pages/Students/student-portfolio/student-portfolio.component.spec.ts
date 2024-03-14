import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPortfolioComponent } from './student-portfolio.component';

describe('StudentPortfolioComponent', () => {
  let component: StudentPortfolioComponent;
  let fixture: ComponentFixture<StudentPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
