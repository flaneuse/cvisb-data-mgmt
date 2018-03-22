import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExptParamsComponent } from './expt-params.component';

describe('ExptParamsComponent', () => {
  let component: ExptParamsComponent;
  let fixture: ComponentFixture<ExptParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExptParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExptParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
