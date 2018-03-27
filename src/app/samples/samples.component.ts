import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  currentPatient: Object;

  constructor() {}

  ngOnInit() {
  }

  onPatientEmit(current_patient) {
    this.currentPatient = current_patient;
  }

  ngOnChanges() {
  }

}
