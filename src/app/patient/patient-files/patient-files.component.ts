import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-patient-files',
  templateUrl: './patient-files.component.html',
  styleUrls: ['./patient-files.component.scss']
})
export class PatientFilesComponent implements OnInit {
  @Input() private current_patient: Object;

  private categories = ['sequencing', 'clinical data']

  constructor() { }

  ngOnInit() {
  }



}
