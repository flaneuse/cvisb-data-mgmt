import { TestBed, inject } from '@angular/core/testing';

import { GetFileStatusService } from './get-file-status.service';

describe('GetFileStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFileStatusService]
    });
  });

  it('should be created', inject([GetFileStatusService], (service: GetFileStatusService) => {
    expect(service).toBeTruthy();
  }));
});
