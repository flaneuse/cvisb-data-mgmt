import { Injectable } from '@angular/core';

import { Patient } from '../classes/patient';

// fake patient json data
import * as patient_data from "../../assets/fakepatients.json";

@Injectable()
export class GetPatientRosterService {
  private patients: Array<Patient> = [];
  private ids: Array<string> = [];

  private test: any;

  constructor() {
}



fakeExp() {
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

fakeTimepts() {
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

fakePatient(i: number) {
   let new_patient: Patient = {
    patient_id: 'G' + String(i).padStart(5, '0'),
    sex: (Math.random() > 0.5) ? "male" : "female",
    age: Math.ceil(Math.random() * 100),
    cohort: (Math.random() > 0.67) ? "Ebola" : "Lassa",
    cohort_exposure: this.fakeExp(),
    timepoints: this.fakeTimepts()
  }
  return new_patient;
}

createFakePatients(num_patients: number = 40) {
  for (var i = 0; i < num_patients; i++) {
    this.patients.push(this.fakePatient(i));
  }
  // console.log(this.patients)
  return this.patients;
}

saveFakePatients() {
  // Helper function to save the patient data
  let patients = this.createFakePatients();

  function save_data(dwnld_data, file_type, file_name) {
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/tsv;charset=utf-8,' + encodeURI(dwnld_data);
  hiddenElement.target = '_blank';
  hiddenElement.download = file_name + '_data.' + file_type;
  hiddenElement.click();
  }

  const dwnld_data = JSON.stringify(patients)

  save_data(dwnld_data, 'json', 'random_patients')

}


getPatients() {
  return patient_data;
}


getIDs(patients: Array<Patient>) {
  for (var i = 0; i < 20; i++) {
    this.ids.push('G' + String(i).padStart(5, '0'));
  }

  return this.ids;
}

}
