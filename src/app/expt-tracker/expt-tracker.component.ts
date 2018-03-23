import { Component, OnInit } from '@angular/core';

import { GetSampleStatusService } from '../data-services/get-sample-status.service';

@Component({
  selector: 'app-expt-tracker',
  templateUrl: './expt-tracker.component.html',
  styleUrls: ['./expt-tracker.component.scss'],
  providers: [GetSampleStatusService],
})
export class ExptTrackerComponent implements OnInit {

  fakeData: any;
  sampleStatuses: Array<Array<number>> = [];
  expts: Array<string>;

  nonExptCols: Array<string> = ['patient_id', 'timepoints', 'done', 'completed'];


  constructor(private sampleSvc: GetSampleStatusService) { }

  ngOnInit() {
    this.fakeData = this.sampleSvc.createFakePatients();

console.log(this.fakeData)
    this.expts = Object.keys(this.fakeData[0]);
  this.expts = this.expts.filter(d => this.nonExptCols.indexOf(d) < 0 )
    console.log(this.expts)

    // sort and filter the data
    for(var i = 0; i < this.expts.length; i++) {
      let expt = this.expts[i];
      this.sampleStatuses[expt] = this.fakeData.map(d => d[expt]).sort();
    }
  }

}
