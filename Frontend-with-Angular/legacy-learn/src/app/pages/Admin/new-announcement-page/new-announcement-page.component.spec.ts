import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnnouncementPageComponent } from './new-announcement-page.component';

describe('NewAnnouncementPageComponent', () => {
  let component: NewAnnouncementPageComponent;
  let fixture: ComponentFixture<NewAnnouncementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAnnouncementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAnnouncementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
