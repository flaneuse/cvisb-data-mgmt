import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator, MatChip } from '@angular/material';

import { Experiment } from '../../classes/experiment';
import { GetSampleStatusService } from '../../data-services/get-sample-status.service';
import { GetExptListService } from '../../data-services/get-expt-list.service';

@Component({
  selector: 'app-patient-stoplight',
  templateUrl: './patient-stoplight.component.html',
  styleUrls: ['./patient-stoplight.component.scss'],
  providers: [GetSampleStatusService, GetExptListService]
})

export class PatientStoplightComponent implements OnInit {
  @Input() private sel_labs: Set<string>;

  all_expts: Array<Experiment> = [];
  expts: Array<string>;
  displayedColumns: Array<string> = [];

  fakeData: any;
  data: any;
  dataSource: any;

  // Summary values
  @Output() totSamplesDone = new EventEmitter<number[]>();
  // @Output() totExptsDone = new EventEmitter<number>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sampleSvc: GetSampleStatusService, private exptSvc: GetExptListService) { }

  ngOnInit() {
    this.fakeData = this.sampleSvc.getStatusData();

    console.log(this.fakeData)
    this.dataSource = new MatTableDataSource(this.fakeData);

    // Filter out just the relevant expts.
    this.all_expts = this.exptSvc.createExptList();
    this.filterExpts();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.filterExpts();
    // TODO: Remove this hack
    if (this.data) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }


  filterExpts() {
    // filter out those selected by checkboxes; return just the names.
    this.expts = this.exptSvc.getExptNames(this.sel_labs);
    // stash a copy of the original view
    this.data = this.fakeData;

    // recalculate totals
    if (this.fakeData) {
      // recalculate
      this.data = this.sampleSvc.calcTotals(this.data, this.expts);
      this.dataSource = new MatTableDataSource(this.data);

      // Summarize values
      // this.totExptsDone.emit(this.sampleSvc.getNumDone(this.data, 'completed'));
      this.totSamplesDone.emit([this.data.length, this.sampleSvc.getNumDone(this.data, 'done')]);
    }

    // only show the columns selected
    this.displayedColumns = ['patient_id', 'timepoints'].concat(this.expts).concat('total_complete');
  }

}
