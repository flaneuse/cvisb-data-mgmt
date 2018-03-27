import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-tracker',
  templateUrl: './patient-tracker.component.html',
  styleUrls: ['./patient-tracker.component.scss']
})

export class PatientTrackerComponent implements OnInit {
// TODO: Create set dynamically
    labs: Set<string> = new Set(["Alter", "Briney", "Tulane", "Andersen"]);

  constructor() { }

  ngOnInit() {
  }

  filterLabs(selLabs: Set<string>) {
    // console.log(selLabs)

    this.labs = new Set(selLabs);
    return this.labs;
  }

}
