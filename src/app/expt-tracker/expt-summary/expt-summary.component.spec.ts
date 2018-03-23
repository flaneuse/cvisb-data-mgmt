import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExptSummaryComponent } from './expt-summary.component';

describe('ExptSummaryComponent', () => {
  let component: ExptSummaryComponent;
  let fixture: ComponentFixture<ExptSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExptSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExptSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
