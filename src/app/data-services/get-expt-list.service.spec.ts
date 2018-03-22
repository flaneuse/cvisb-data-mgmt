import { TestBed, inject } from '@angular/core/testing';

import { GetExptListService } from './get-expt-list.service';

describe('GetExptListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetExptListService]
    });
  });

  it('should be created', inject([GetExptListService], (service: GetExptListService) => {
    expect(service).toBeTruthy();
  }));
});
