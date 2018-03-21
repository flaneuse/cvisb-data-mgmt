import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStoplightComponent } from './patient-stoplight.component';

describe('PatientStoplightComponent', () => {
  let component: PatientStoplightComponent;
  let fixture: ComponentFixture<PatientStoplightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientStoplightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStoplightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
