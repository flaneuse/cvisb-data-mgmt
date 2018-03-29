import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormControl } from "@angular/forms";



@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.scss']
})

export class FileTableComponent implements OnInit {
  @Input() private files: Array<any>;
  dropbox_url: string = "https://www.dropbox.com/home";


  displayedColumns = ['file', 'timepoint', 'status', 'date', 'upload'];
  storageCtrl: FormControl;
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.files);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.files);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }




}
