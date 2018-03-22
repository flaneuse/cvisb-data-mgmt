import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyFilenameComponent } from './copy-filename.component';

describe('CopyFilenameComponent', () => {
  let component: CopyFilenameComponent;
  let fixture: ComponentFixture<CopyFilenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyFilenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyFilenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
