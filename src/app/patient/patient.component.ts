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

  constructor() {}

  ngOnInit() {
  }


  ngOnChanges() {
  }

}
