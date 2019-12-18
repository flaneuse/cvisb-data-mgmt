import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExptDetailsComponent } from './expt-details.component';

describe('ExptDetailsComponent', () => {
  let component: ExptDetailsComponent;
  let fixture: ComponentFixture<ExptDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExptDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
