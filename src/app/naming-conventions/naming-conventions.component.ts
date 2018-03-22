import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naming-conventions',
  templateUrl: './naming-conventions.component.html',
  styleUrls: ['./naming-conventions.component.scss']
})

export class NamingConventionsComponent implements OnInit {
  currentPatient: Object = [];
  currentTimept: number;

  constructor() { }

  ngOnInit() {
  }

  onPatientEmit(current_patient) {
    this.currentPatient = current_patient.patient_id;
  }

  onTimeptEmit(current_timept) {
    this.currentTimept = current_timept;
  }

}
