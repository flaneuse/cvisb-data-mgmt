import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExptTrackerComponent } from './expt-tracker.component';

describe('ExptTrackerComponent', () => {
  let component: ExptTrackerComponent;
  let fixture: ComponentFixture<ExptTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExptTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExptTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
