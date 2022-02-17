import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledFormsComponent } from './disabled-forms.component';

describe('DisabledFormsComponent', () => {
  let component: DisabledFormsComponent;
  let fixture: ComponentFixture<DisabledFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisabledFormsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
