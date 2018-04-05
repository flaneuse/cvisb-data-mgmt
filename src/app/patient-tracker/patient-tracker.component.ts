import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-tracker',
  templateUrl: './patient-tracker.component.html',
  styleUrls: ['./patient-tracker.component.scss']
})

export class PatientTrackerComponent implements OnInit {
// TODO: Create set dynamically
    labs: Set<string> = new Set(["Alter", "Briney", "Tulane", "Andersen"]);

    total_samples: number;
    total_done: number;
    // total_expts: number;

  constructor() { }

  ngOnInit() {
  }

  filterLabs(selLabs: Set<string>) {
    // console.log(selLabs)

    this.labs = new Set(selLabs);
    return this.labs;
  }

  updateTotal(new_total) {
    console.log("TOTAL: " + new_total)
    this.total_samples = new_total[0];
    this.total_done = new_total[1];
  }



}
