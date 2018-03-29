import { TestBed, inject } from '@angular/core/testing';

import { GetSampleListService } from './get-sample-list.service';

describe('GetSampleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSampleListService]
    });
  });

  it('should be created', inject([GetSampleListService], (service: GetSampleListService) => {
    expect(service).toBeTruthy();
  }));
});
