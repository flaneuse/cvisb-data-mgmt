import { Component, OnInit } from '@angular/core';

import { GetSampleStatusService } from '../data-services/get-sample-status.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [GetSampleStatusService]
})
export class OverviewComponent implements OnInit {
  private statuses: number[];
  private nonExptCols: Array<string> = ['patient_id', 'timepoints', 'done', 'completed'];

  private num_expts: number;
  private completed_expts: number;

  private num_samples: number;
  private completed_samples: number;


  constructor(private sampleSvc: GetSampleStatusService) { }

  ngOnInit() {
    let fakeData = this.sampleSvc.createFakePatients();

    this.statuses = this.sampleSvc.getStatuses(fakeData, this.nonExptCols, false);

    this.num_expts = this.statuses.filter(d => d > 0).length;
    this.completed_expts = this.sampleSvc.getNumDone(fakeData, 'completed');

    this.num_samples = fakeData.length;
    this.completed_samples = this.sampleSvc.getNumDone(fakeData, 'done');
  }

}
