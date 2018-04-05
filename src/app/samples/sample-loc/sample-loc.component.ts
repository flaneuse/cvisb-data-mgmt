import { Component, OnInit, AfterViewInit, OnChanges, Input, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormControl } from "@angular/forms";

import {SelectionModel} from '@angular/cdk/collections';
import { GetSampleListService } from '../../data-services/get-sample-list.service';

@Component({
  selector: 'app-sample-loc',
  templateUrl: './sample-loc.component.html',
  styleUrls: ['./sample-loc.component.scss'],
  providers: [GetSampleListService]
})
export class SampleLocComponent implements OnInit {
  @Input() private current_patient: Object;
  @Input() private current_timepoint: number;

  private storage_locs: Array<Object> = [
    { 'loc_id': 'SL1', 'institution': 'Sierra Leone', 'location': 'KGH' },
    { 'loc_id': 'TSRI1', 'institution': 'TSRI', 'location': 'Andersen lab' },
    { 'loc_id': 'TSRI2', 'institution': 'TSRI', 'location': 'Briney lab' }];
  storageCtrl: FormControl;
  storageLoc: string;
  test: any;
  selection = new SelectionModel<Element>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Invalid status
  checked = false;

  private sample_types: Array<Object> = [];

  displayedColumns = ['sample_id', 'timepoint', 'description', 'date', 'location', 'invalid'];
  dataSource;



  constructor(private sampleSvc: GetSampleListService) {
  }

  ngOnInit() {
    this.getSamples();

  }

  ngOnChanges() {
    this.getSamples();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getSamples() {
    this.sample_types = this.sampleSvc.createFakeSamples(this.current_patient);
    // TODO: move to service
    if (this.current_timepoint) {
      this.sample_types = this.sample_types.filter(d => d.timepoint === this.current_timepoint);
    }
    console.log(this.sample_types)

    this.dataSource = new MatTableDataSource(this.sample_types);
  }

}
