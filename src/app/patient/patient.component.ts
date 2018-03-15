import { Component, OnInit, OnChanges } from '@angular/core';

import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  private patients: Array<any> = [];
  patientCtrl: FormControl;
  currentPatient: Object;

  constructor() { this.patientCtrl = new FormControl(); }

  ngOnInit() {
    this.patients = createFakePatients();
    console.log(this.patients)

// BUG: for testing purposes; be sure to remove.
    this.currentPatient = this.patients[0]
  }


  ngOnChanges() {
  }

// TODO: REMOVE / fix weirdness on changing ID
  changeID(event, new_patient){
    console.log("CHANGED!")
    console.log(new_patient)
    this.currentPatient = new_patient;
  }

}

let fakeExp = function() {
  const rand_num = Math.random();
  if (rand_num > 0.8) {
    return "exposed";
  } else if (rand_num > 0.1) {
    // return "infected";
    return (Math.random() > 0.2) ? "died" : "survived"
  } else {
    return "community";
  }
}

let fakeTimepts = function() {
  const rand_num = Math.random();

  var timepts = [
    [0, 1],
    [0, 1, 2],
    [0, 1, 2, 3],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4, 7],
    [0, 1, 2, 3, 4, 7, 10]
  ];

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

let fakePatient = function(i) {
  return {
    'patient_id': 'G' + String(i).padStart(5, '0'),
    'sex': (Math.random() > 0.5) ? "male" : "female",
    'age': Math.ceil(Math.random() * 100),
    'cohort': (Math.random() > 0.67) ? "Ebola" : "Lassa",
    'cohort_exposure': fakeExp(),
    'timepoints': fakeTimepts()
  }
}

let createFakePatients = function(num_patients: number = 20) {
  var arr = [];

  for (var i = 0; i < num_patients; i++) {
    arr.push(fakePatient(i));
  }
  return arr;

}
