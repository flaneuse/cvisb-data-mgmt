import { TestBed, inject } from '@angular/core/testing';

import { GetSampleStatusService } from './get-sample-status.service';

describe('GetSampleStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSampleStatusService]
    });
  });

  it('should be created', inject([GetSampleStatusService], (service: GetSampleStatusService) => {
    expect(service).toBeTruthy();
  }));
});
