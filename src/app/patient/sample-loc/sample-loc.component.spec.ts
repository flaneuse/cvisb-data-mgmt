import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleLocComponent } from './sample-loc.component';

describe('SampleLocComponent', () => {
  let component: SampleLocComponent;
  let fixture: ComponentFixture<SampleLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
