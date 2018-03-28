import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  currentPatient: Object;
  currentTimept: number;

  constructor() {}

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
