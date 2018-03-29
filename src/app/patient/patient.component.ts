import { Component, OnInit, OnChanges } from '@angular/core';

import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  // private patients: Array<any> = [];
  currentPatient: Object;
  currentTimept: number;

  constructor() { }

  ngOnInit() {
  }

  onPatientEmit(current_patient) {
    this.currentPatient = current_patient;
  }

  onTimepointEmit(current_tp) {
    this.currentTimept = current_tp;
  }

  ngOnChanges() {
  }

}
