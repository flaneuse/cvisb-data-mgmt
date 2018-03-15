import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-sample-loc',
  templateUrl: './sample-loc.component.html',
  styleUrls: ['./sample-loc.component.scss']
})
export class SampleLocComponent implements OnInit {
  @Input() private current_patient: Object;

  private storage_locs: Array<Object> = [
    { 'loc_id': 'SL1', 'institution': 'Sierra Leone', 'location': 'KGH' },
    { 'loc_id': 'TSRI1', 'institution': 'TSRI', 'location': 'Andersen lab' },
    { 'loc_id': 'TSRI2', 'institution': 'TSRI', 'location': 'Briney lab' }];
  storageCtrl: FormControl;
  storageLoc: string;

    @ViewChild(MatSort) sort: MatSort;

// Invalid status
  checked = false;

  private sample_types: Array<Object> = [
    { 'sample_id': 'plasma', 'sample_descrip': 'raw blood plasma', 'timepts': [1, 2, 3, 4, 7, 10] },
    { 'sample_id': 'PBMC', 'sample_descrip': 'peripheral blood mononuclear cells', 'timepts': [1] },
    { 'sample_id': 'vDNA', 'sample_descrip': 'extracted viral DNA', 'timepts': [1, 2, 3, 4, 7, 10] },
    { 'sample_id': 'hDNA', 'sample_descrip': 'extracted host DNA', 'timepts': [1, 2, 3, 4, 7, 10] },
    { 'sample_id': 'vRNA', 'sample_descrip': 'extracted viral RNA', 'timepts': [1, 2, 3, 4, 7, 10] },
    { 'sample_id': 'hRNA', 'sample_descrip': 'extracted host RNA', 'timepts': [1, 2, 3, 4, 7, 10] }
  ]

  displayedColumns = ['sample_id', 'timepoint', 'description', 'date', 'location', 'invalid'];
  dataSource = new MatTableDataSource(this.sample_types);



  constructor() { }

  ngOnInit() {
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    console.log(this.sort)
    this.dataSource.sort = this.sort;
  }

}
