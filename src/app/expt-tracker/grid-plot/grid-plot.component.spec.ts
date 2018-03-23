import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPlotComponent } from './grid-plot.component';

describe('GridPlotComponent', () => {
  let component: GridPlotComponent;
  let fixture: ComponentFixture<GridPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
