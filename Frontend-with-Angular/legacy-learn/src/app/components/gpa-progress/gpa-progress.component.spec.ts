import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaProgressComponent } from './gpa-progress.component';

describe('GpaProgressComponent', () => {
  let component: GpaProgressComponent;
  let fixture: ComponentFixture<GpaProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpaProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpaProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
