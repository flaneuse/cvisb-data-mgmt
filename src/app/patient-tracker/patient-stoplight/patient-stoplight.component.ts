import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';

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
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sampleSvc: GetSampleStatusService, private exptSvc: GetExptListService) { }

  ngOnInit() {
    this.fakeData = this.sampleSvc.createFakePatients();

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
  }

// TODO: recalculate totals.
  filterExpts() {
    // filter out those selected by checkboxes; return just the names.
    this.expts = this.all_expts
    .filter(d => this.sel_labs.has(d.lab))
    .map(d => d.expt_label);

    this.displayedColumns = ['patient_id', 'timepoint'].concat(this.expts).concat('total_complete');
  }

}
