import { Injectable } from '@angular/core';

@Injectable()
export class GetSampleStatusService {

  constructor() { }


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

  // BUG: fix counting of patient id, timepoints
  // TODO: calculate total done
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


  fakePatient(i) {
    let patient = {
      'patient_id': 'G' + String(i).padStart(5, '0'),
      'timepoints': this.fakeTimepts(),
      'patient metadata': this.sampleReview(),
      'ELISA': this.sampleReview(),
      'Piccolo metabolites': this.sampleReview(),
      'Kenzen sensors': this.sampleReview(),
      'HLA sequencing': this.sampleStatus(),
      'Amplicon virus sequencing': this.sampleStatus(),
      'Metagenomic sequencing': this.sampleStatus(), 'BCR repertoire': this.sampleStatus(), 'TCR repertoire': this.sampleStatus(), 'Antibody functional data': this.sampleStatus(), 'qPCR viral load': this.sampleStatus()

    }

    // patient['done'] = this.calcDone(patient);
    // patient['completed'] = this.calcNumFinished(patient);

    return patient;
  }

  createFakePatients(num_patients: number = 40) {
    var arr = [];
    var arr2 = [];

    // Create fake patients
    for (var i = 0; i < num_patients; i++) {
      arr.push(this.fakePatient(i));
    }

    arr = this.calcTotals(arr);

    arr.sort(function(a, b) {
      return b.completed - a.completed;
    })


    console.log(arr)
    // console.log(arr2)

    console.log(this.getNumDone(arr, 'done'))
    console.log(this.getNumDone(arr, 'completed'))

    return arr;

  }

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

  getNumDone(arr: any[], sum_var: string = 'done') {
    let complete_status = arr.map(d => d[sum_var]);

    let total = complete_status.reduce((a, b) => a + b, 0);

    return total;
  }

// return array of sample Status values
  getStatuses(data: any[], nonExptCols: string[], nested: boolean = true) {
    let sampleStatuses = [];

    let expts = Object.keys(data[0]);
    expts = expts
      .filter(d => nonExptCols.indexOf(d) < 0)
    // console.log(expts)

    // sort and filter the data
    for (var i = 0; i < expts.length; i++) {
      let expt = expts[i];
      if(nested) {
        sampleStatuses[expt] = data.map(d => d[expt]).sort();
      } else {
        sampleStatuses.push(data.map(d => d[expt]).sort())
      }
    }

    if(!nested) {
      sampleStatuses = [].concat(...sampleStatuses);
    }

    // console.log(sampleStatuses)

    return sampleStatuses;
  }

}
