import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-tracker',
  templateUrl: './patient-tracker.component.html',
  styleUrls: ['./patient-tracker.component.scss']
})
export class PatientTrackerComponent implements OnInit {
  labs = ['Alter', 'Andersen', 'Briney'];
  
  constructor() { }

  ngOnInit() {
  }

}
