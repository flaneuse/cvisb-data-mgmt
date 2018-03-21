import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusKeyComponent } from './status-key.component';

describe('StatusKeyComponent', () => {
  let component: StatusKeyComponent;
  let fixture: ComponentFixture<StatusKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
