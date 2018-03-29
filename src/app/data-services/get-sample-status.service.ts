import { Injectable } from '@angular/core';

@Injectable()
export class GetSampleStatusService {

  constructor() { }


  sampleStatus() {
    let statuses = [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

  sampleReview() {
    let statuses = [4, 5];
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
  calcFinished(patient, completed_code = 5) {
    let tmp = patient;
    // delete tmp.patient_id;
    // delete tmp.timepoints;

    // console.log(tmp)

    const add = (accumulator, currentValue) => accumulator + currentValue;

    let score = Object.values(tmp).map(d => d === completed_code).reduce(add)
    return score;
  }

  calcDone(patient, completed_code = 5, aborted_code = 0) {

    let isDone = function(value) {
      return value === completed_code || value === aborted_code;
    }

    let tmp = patient;
    // delete tmp.patient_id;
    // delete tmp.timepoints;


    var score = Object.keys(tmp).every(function(k) { return isDone(tmp[k]) });
    // let score = true//tmp.every(isDone);
    return score;
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

    patient['done'] = this.calcDone(patient);
    patient['completed'] = this.calcFinished(patient);


    return patient;
  }

  createFakePatients(num_patients: number = 40) {
    var arr = [];

    for (var i = 0; i < num_patients; i++) {
      arr.push(this.fakePatient(i));
    }

    arr.sort(function(a, b) {
      return b.completed - a.completed;
    })
    return arr;

  }
}
