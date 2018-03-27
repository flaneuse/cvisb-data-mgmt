import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGrpComponent } from './grid-grp.component';

describe('GridGrpComponent', () => {
  let component: GridGrpComponent;
  let fixture: ComponentFixture<GridGrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridGrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
