import { Injectable } from '@angular/core';
import { GetPatientRosterService } from './get-patient-roster.service';

@Injectable()
export class GetSampleListService {

  constructor(private roster: GetPatientRosterService) { }

  private sample_types: Array<Object> = [
    { 'sample_type': 'plasma', 'sample_descrip': 'raw blood plasma', 'timepts': [1, 2, 3, 4, 7, 10] },
    { 'sample_type': 'PBMC', 'sample_descrip': 'peripheral blood mononuclear cells', 'timepts': [1] },
    { 'sample_type': 'DNA', 'sample_descrip': 'extracted DNA', 'timepts': [1, 2, 3, 4, 7, 10] },
    { 'sample_type': 'RNA', 'sample_descrip': 'extracted RNA', 'timepts': [1, 2, 3, 4, 7, 10] }
  ]

  createFakeSamples(patientObj) {
    // let patients = this.roster.createFakePatients();
    let timepoints = patientObj.timepoints;
    // console.log(timepoints)

    let arr: Array<any> = [];


    for (var i = 0; i < timepoints.length; i++) {
      // console.log(i)

      let filtered = this.sample_types.filter(d => d.timepts.includes(timepoints[i]))
      // console.log(filtered)

      if (filtered.length > 0) {
        for(var j = 0; j < filtered.length; j++) {
          // console.log(j)
          let tmp = [];
            tmp['patient_id'] = patientObj.patient_id;
            tmp['timepoint'] = timepoints[i];
            tmp['sample_type'] = filtered[j].sample_type;
            tmp['sample_descrip'] = filtered[j].sample_descrip;
            tmp['sample_id'] = patientObj.patient_id + "_T" + timepoints[i] + filtered[j].sample_type;
            // console.log(tmp)

            arr.push(tmp)
            // console.log(arr)
        }

      }
    }
    return arr.sort(function(a,b) {
    return a.timepoint - b.timepoint;
  })
  }


}
