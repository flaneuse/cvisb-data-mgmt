import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';

import { GetFileStatusService } from '../../data-services/get-file-status.service';

@Component({
  selector: 'app-patient-files',
  templateUrl: './patient-files.component.html',
  styleUrls: ['./patient-files.component.scss'],
  providers: [GetFileStatusService]
})
export class PatientFilesComponent implements OnInit {
  @Input() private current_patient: Object;
  @Input() private current_timepoint: number;

  files: Array<any>;

  private categories = ["metadata", "clinical_data", "sequencing", "immune"];

  constructor(private fileSvc: GetFileStatusService) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.files = this.fileSvc.getFakeFiles(this.current_patient, this.current_timepoint);
    // console.log(this.files)
  }

}
