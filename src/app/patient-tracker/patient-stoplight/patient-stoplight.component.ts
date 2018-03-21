import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator, MatChip } from '@angular/material';

@Component({
  selector: 'app-patient-stoplight',
  templateUrl: './patient-stoplight.component.html',
  styleUrls: ['./patient-stoplight.component.scss']
})

export class PatientStoplightComponent implements OnInit {
  expts = ['patient metadata','Piccolo metabolites', 'Kenzen sensors', 'HLA sequencing','Amplicon virus sequencing', 'Metagenomic sequencing', 'BCR repertoire', 'TCR repertoire', 'Antibody functional data', 'qPCR viral load'];

  displayedColumns = ['patient_id', 'timepoint'].concat(this.expts).concat('total_complete');

  dataSource = new MatTableDataSource(fakeData);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    // console.log(fakeData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}



let sampleStatus = function() {
  let statuses = [0, 1, 2, 3, 4, 5]
  return statuses[Math.floor(Math.random() * statuses.length)];
}

let sampleReview = function() {
  let statuses = [4,5];
  return statuses[Math.floor(Math.random() * statuses.length)];
}


let fakeTimepts = function() {
  const rand_num = Math.random();

  var timepts = [1,2,3,4,7,10];

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

let calcFinished = function(patient, completed_code = 5) {
  let tmp = patient;
  // delete tmp.patient_id;
  // delete tmp.timepoints;

  // console.log(tmp)

  const add = (accumulator, currentValue) => accumulator + currentValue;

  let score = Object.values(tmp).map(d => d === completed_code).reduce(add)
  return score;
}

let fakePatient = function(i) {
  let patient = {
    'patient_id': 'G' + String(i).padStart(5, '0'),
    'timepoints': fakeTimepts(),
    'patient metadata': sampleReview(),
    'Piccolo metabolites': sampleReview(),
    'Kenzen sensors': sampleReview(),
    'HLA sequencing': sampleStatus(),
    'Amplicon virus sequencing': sampleStatus(),
    'Metagenomic sequencing': sampleStatus(), 'BCR repertoire': sampleStatus(), 'TCR repertoire': sampleStatus(), 'Antibody functional data': sampleStatus(), 'qPCR viral load': sampleStatus()

  }

  patient['completed'] = calcFinished(patient);

  return patient;
}

let createFakePatients = function(num_patients: number = 20) {
  var arr = [];

  for (var i = 0; i < num_patients; i++) {
    arr.push(fakePatient(i));
  }

  arr.sort(function(a,b) {
    return b.completed - a.completed;
  })
  return arr;

}

const fakeData = createFakePatients();
