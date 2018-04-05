import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { GetSampleStatusService } from '../data-services/get-sample-status.service';
import { GetExptListService } from '../data-services/get-expt-list.service';

@Component({
  selector: 'app-expt-tracker',
  templateUrl: './expt-tracker.component.html',
  styleUrls: ['./expt-tracker.component.scss'],
  providers: [GetSampleStatusService, GetExptListService],
})
export class ExptTrackerComponent implements OnInit {

  fakeData: any;
  sampleStatuses: Array<Array<number>> = [];
  expts: Array<string>;
  labs: Set<string> = new Set(['Alter', 'Andersen', 'Tulane', 'Briney']); //TODO: dynamic

  nonExptCols: Array<string> = ['patient_id', 'timepoints', 'done', 'completed'];


  constructor(private sampleSvc: GetSampleStatusService, private exptSvc: GetExptListService) { }

  ngOnInit() {
    this.fakeData = this.sampleSvc.getStatusData();
    this.expts = this.exptSvc.getExptNames(this.labs);


    this.sampleStatuses = this.sampleSvc.getStatuses(this.nonExptCols);

  }

  ngOnChanges() {
    this.sampleStatuses = this.sampleSvc.getStatuses(this.nonExptCols);
  }

  filterLabs(selLabs: Set<string>) {
    this.labs = new Set(selLabs);

    this.expts = this.exptSvc.getExptNames(selLabs);
  }



}
