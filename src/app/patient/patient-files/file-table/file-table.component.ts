import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormControl } from "@angular/forms";

import { GetFileStatusService } from '../../../data-services/get-file-status.service';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss'],
  providers: [GetFileStatusService]
})

export class FileTableComponent implements OnInit {
  @Input() private current_patient: Object;
  @Input() private current_cat: string;

  private files: Array<any>;


  displayedColumns = ['file', 'timepoint', 'status', 'date', 'upload'];
  storageCtrl: FormControl;
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fileSvc: GetFileStatusService) {
    this.files = fileSvc.getFakeFiles();
  console.log(this.files)
}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.files);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
