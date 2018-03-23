import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSelectorComponent } from './lab-selector.component';

describe('LabSelectorComponent', () => {
  let component: LabSelectorComponent;
  let fixture: ComponentFixture<LabSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
