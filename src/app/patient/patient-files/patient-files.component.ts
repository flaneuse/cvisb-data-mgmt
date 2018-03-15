import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-patient-files',
  templateUrl: './patient-files.component.html',
  styleUrls: ['./patient-files.component.scss']
})
export class PatientFilesComponent implements OnInit {
  @Input() private current_patient: Object;

  displayedColumns = ['file', 'timepoint', 'status', 'date', 'upload'];
  storageCtrl: FormControl;
  dataSource = new MatTableDataSource(files);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}



const files = [
  {
    "expt_list": "patient pre-admission survey",
    "expt_cat": "metadata",
    "cat_order": 0,
    "expt_id": "patientinfo",
    "file_types": [".csv"],
    "available params": "NA",
    "num_repl": 1,
    "timepts": [0],
    "dropbox": "CViSB/Data/Metadata/"
  },
  {
    "expt_list": "patient symptoms",
    "expt_cat": "clinical_obs",
    "cat_order": 1,
    "expt_id": "symptoms",
    "file_types": [".csv"],
    "available params": "NA",
    "num_repl": 1,
    "timepts": [1, 2, 3, 4, 7, 10],
    "dropbox": "CViSB/Data/Metadata/"
  },
  {
    "expt_list": "patient sequelae",
    "expt_cat": "clinical_obs",
    "cat_order": 1,
    "expt_id": "sequelae",
    "file_types": [".csv"],
    "available params": "NA",
    "num_repl": 1,
    "timepts": [1, 2, 3, 4, 7, 10],
    "dropbox": "CViSB/Data/Metadata/"
  },
  {
    "expt_list": "patient treatment notes",
    "expt_cat": "clinical_obs",
    "cat_order": 1,
    "expt_id": "treatment",
    "file_types": [".csv"],
    "available params": "NA",
    "num_repl": 1,
    "timepts": [1, 2, 3, 4, 7, 10],
    "dropbox": "CViSB/Data/Metadata/"
  },
  {
    "expt_list": "Kenzen",
    "expt_cat": "clinical_data",
    "cat_order": 2,
    "expt_id": "kenzen",
    "file_types": [".csv"],
    "available params": "NA",
    "num_repl": 1,
    "timepts": [0, 1, 2, 3, 4, 7, 10],
    "dropbox": "CViSB/Data/Kenzen/"
  },
  {
    "expt_list": "piccolo metabolism assays",
    "expt_cat": "clinical_data",
    "cat_order": 2,
    "expt_id": "piccolo",
    "file_types": [".csv"],
    "available params": "NA",
    "num_repl": 1,
    "timepts": [1, 2, 3, 4, 7, 10],
    "dropbox": "CViSB/Data/Piccolo/"
  },
  {
    "expt_list": "hospital vital signs monitoring data (bp, heartrate, etc.)",
    "expt_cat": "clinical_data",
    "cat_order": 2,
    "expt_id": "vitals",
    "file_types": [".csv"],
    "available params": "NA",
    "num_repl": 1,
    "timepts": [1, 2, 3, 4, 7, 10],
    "dropbox": "CViSB/Data/Vitals/"
  },
  {
    "expt_list": "ELISA",
    "expt_cat": "clinical_data",
    "cat_order": 2,
    "expt_id": "elisa",
    "file_types": [".csv"],
    "available params": "NA",
    "num_repl": 1,
    "timepts": [1, 2, 3, 4, 7, 10],
    "dropbox": "CViSB/Data/ELISA/"
  },
  {
    "expt_list": "HLA sequencing",
    "expt_cat": "HLA",
    "cat_order": 3,
    "expt_id": "HLA",
    "file_types": [".bam, .csv"],
    "available params": "NA",
    "num_repl": 2,
    "timepts": [1],
    "dropbox": "CViSB/Data/Sequencing - HLA/"
  }
]
