import { TestBed, inject } from '@angular/core/testing';

import { GetPatientRosterService } from './get-patient-roster.service';

describe('GetPatientRosterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPatientRosterService]
    });
  });

  it('should be created', inject([GetPatientRosterService], (service: GetPatientRosterService) => {
    expect(service).toBeTruthy();
  }));
});
