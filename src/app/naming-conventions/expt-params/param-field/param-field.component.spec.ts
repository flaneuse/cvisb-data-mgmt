import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamFieldComponent } from './param-field.component';

describe('ParamFieldComponent', () => {
  let component: ParamFieldComponent;
  let fixture: ComponentFixture<ParamFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
