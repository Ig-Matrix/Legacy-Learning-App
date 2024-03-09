import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnnouncementPageComponent } from './student-announcement-page.component';

describe('StudentAnnouncementPageComponent', () => {
  let component: StudentAnnouncementPageComponent;
  let fixture: ComponentFixture<StudentAnnouncementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAnnouncementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAnnouncementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
