import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamingConventionsComponent } from './naming-conventions.component';

describe('NamingConventionsComponent', () => {
  let component: NamingConventionsComponent;
  let fixture: ComponentFixture<NamingConventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamingConventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamingConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
