import { Injectable } from '@angular/core';

import { GetPatientRosterService } from './get-patient-roster.service';

// fake status json data
import * as status_data from "../../assets/fakestatuses.json";


@Injectable()
export class GetSampleStatusService {
  private patients: any[];

  constructor(private rosterSvc: GetPatientRosterService) {
    this.patients = this.rosterSvc.getPatients();
  }


  sampleStatus() {
    let statuses = [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

  sampleReview() {
    let statuses = [4, 5, 5, 5, 5, 5];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }


  fakeTimepts() {
    const rand_num = Math.random();

    var timepts = [1, 2, 3, 4, 7, 10];

    if (rand_num < 0.4) {
      return timepts[0];
    } else if (rand_num < 0.6) {
      return timepts[1];
    } else if (rand_num < 0.6) {
      return timepts[2];
    } else if (rand_num < 0.6) {
      return timepts[3];
    } else if (rand_num < 0.6) {
      return timepts[4];
    } else return timepts[5];

  }

  calcNumFinished(patient, completed_code = 5) {

    // Create a copy so the patient id, timepoints can be removed
    let tmp = Object.assign({}, patient)
    delete tmp.patient_id;
    delete tmp.timepoints;

    const add = (accumulator, currentValue) => accumulator + currentValue;

    let score = Object.values(tmp).map(d => d === completed_code).reduce(add)
    return Number(score);
  }

  calcDone(patient, completed_code = 5, aborted_code = 0) {

    let isDone = function(value) {
      return value === completed_code || value === aborted_code;
    }

    // Create a copy so the patient id, timepoints can be removed
    let tmp = Object.assign({}, patient)
    delete tmp.patient_id;
    delete tmp.timepoints;

    var score = Object.keys(tmp).every(function(k) { return isDone(tmp[k]) });
    // let score = true//tmp.every(isDone);
    return Number(score);
  }




  // Returns summarized value of number of completed experiments
  calcTotals(arr: any[], expts: string[] = []) {
    let filtered;

    let col_names = Object.keys(arr[0]);

    for (var i = 0; i < arr.length; i++) {
      filtered = Object.assign({}, arr[i]);

      // remove the filtered
      if (expts.length > 0) {
        for (var j = 0; j < col_names.length; j++) {
          if (expts.indexOf(col_names[j]) === -1) {
            // console.log('deleting ' + col_names[j])
            delete filtered[col_names[j]];
          }
        }
      }
      // console.log(filtered)

      arr[i]['done'] = this.calcDone(filtered);
      arr[i]['completed'] = this.calcNumFinished(filtered);
    }

    return arr;
  }

  // Returns summarized number of the total of samples completely analyzed
  getNumDone(arr: any[], sum_var: string = 'done') {
    let complete_status = arr.map(d => d[sum_var]);

    let total = complete_status.reduce((a, b) => a + b, 0);

    return total;
  }

  // return data frame containing all sample status info
  getStatusData() {
    return status_data;
  }

  // return array of sample status values
  getStatuses(nonExptCols: string[], nested: boolean = true) {
    let data = status_data;

    let sampleStatuses = [];

    let expts = Object.keys(data[0]);
    expts = expts
      .filter(d => nonExptCols.indexOf(d) < 0)
    // console.log(expts)

    // sort and filter the data
    for (var i = 0; i < expts.length; i++) {
      let expt = expts[i];
      if (nested) {
        sampleStatuses[expt] = data.map(d => d[expt]).sort();
      } else {
        sampleStatuses.push(data.map(d => d[expt]).sort())
      }
    }

    if (!nested) {
      sampleStatuses = [].concat(...sampleStatuses);
    }

    return sampleStatuses;
  }


  // ONLY NEEDED FOR TESTING PURPOSES  ----------------------------------------------------------------------------------------------------
  fakePatient(patient_id, timepoint) {
    let patient = {
      'patient_id': patient_id,
      'timepoints': timepoint,
      'patient metadata': this.sampleReview(),
      'ELISA': this.sampleReview(),
      'Piccolo metabolites': this.sampleReview(),
      'Kenzen sensors': this.sampleReview(),
      'HLA sequencing': this.sampleStatus(),
      'Amplicon virus sequencing': this.sampleStatus(),
      'Metagenomic sequencing': this.sampleStatus(), 'BCR repertoire': this.sampleStatus(), 'TCR repertoire': this.sampleStatus(), 'Antibody functional data': this.sampleStatus(), 'qPCR viral load': this.sampleStatus()

    }

    return patient;
  }

  createFakeStatuses() {
    var arr = [];

    // Create fake patients
    for (var i = 0; i < this.patients.length; i++) {
      let patient_id = this.patients[i].patient_id;
      let timepoints = this.patients[i].timepoints;

      for (var j = 0; j < timepoints.length; j++) {
        arr.push(this.fakePatient(patient_id, timepoints[j]));
      }
    }

    arr = this.calcTotals(arr);

    arr.sort(function(a, b) {
      return b.completed - a.completed;
    })

    return arr;
  }


  saveFakeStatuses() {
    // Helper function to save the status data
    let statuses = this.createFakeStatuses();

    function save_data(dwnld_data, file_type, file_name) {
      var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/tsv;charset=utf-8,' + encodeURI(dwnld_data);
      hiddenElement.target = '_blank';
      hiddenElement.download = file_name + '_data.' + file_type;
      hiddenElement.click();
    }

    const dwnld_data = JSON.stringify(statuses)

    save_data(dwnld_data, 'json', 'random_patients')

  }

}
