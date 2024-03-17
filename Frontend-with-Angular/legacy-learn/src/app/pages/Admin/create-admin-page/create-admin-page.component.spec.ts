import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminPageComponent } from './create-admin-page.component';

describe('CreateAdminPageComponent', () => {
  let component: CreateAdminPageComponent;
  let fixture: ComponentFixture<CreateAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdminPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
