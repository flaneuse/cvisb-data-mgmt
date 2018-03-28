import { Component, OnInit, OnChanges, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


// Data service
import { Patient } from '../classes/patient';
import { GetPatientRosterService } from "../data-services/get-patient-roster.service"

export class Timepoint {
  constructor(
    public timepoint: number,
    public state: boolean
  ) { }
}

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.scss'],
  providers: [GetPatientRosterService]
})
export class PatientHeaderComponent implements OnInit {
  @Output() patientEmitter = new EventEmitter<Patient>();
  @Output() timeptEmitter = new EventEmitter<number>();

  private patients: Array<Patient> = [];
  currentPatient: Object;
  timepoints: Array<Timepoint> = [];
  selTimepoint: number;

  patientCtrl: FormControl = new FormControl();
  // options: any;
  filteredOptions: Observable<Patient[]>;

  constructor(private roster: GetPatientRosterService, private _changeDetectionRef: ChangeDetectorRef) {
  }



  ngOnInit() {
    this.patients = this.roster.createFakePatients();
    console.log(this.patients)

    this.filteredOptions = this.patientCtrl.valueChanges
      .pipe(
        startWith<string | Patient>(''),
        map(value => typeof value === 'string' ? value : value.patient_id),
        map(patient_id => patient_id ? this.filter(patient_id) : this.patients.slice())
      );
  }


  filter(patient_id: string): Patient[] {
    return this.patients.filter(option =>
      option.patient_id.toLowerCase().indexOf(patient_id.toLowerCase()) === 0);
  }

  displayFn(user?: Patient): string | undefined {
    return user ? user.patient_id : undefined;
  }


  // add booleans for timepoints to track if they've been selected
  getTimepoints(tp) {
    let arr = [];

    for (var i = 0; i < tp.length; i++) {
      arr.push(new Timepoint(tp[i], false));

    }
    return arr;
  }

  // For Patient ID select, only display the ID, not the entire object
  displayFunc(user?): string | undefined {
    return user ? user.patient_id : undefined;
  }

  changeID(event, new_patient) {
    // Fix for double-sending events if click/keypress; see https://github.com/angular/material2/issues/4094
    if (event.isUserInput) {
      // Update current patient
      this.currentPatient = new_patient;
      this.patientEmitter.emit(new_patient);
      this.timepoints = this.getTimepoints(new_patient.timepoints);
      // Reset the selected timepoint if already selected.
      this.selTimepoint = null;
      this.timeptEmitter.emit(null);
    }
  }


  highlightTimepoint(event, timept) {
    // console.log(timept)

    let vm = this;
    // workaround to deal w/ asynch changes b/w parent (patient-header) and child (mat-chip)
    // see https://stackoverflow.com/questions/47021161/incorrect-behaviour-when-selecting-chips-in-angular-material?rq=1
    setTimeout(function() {

      // Change the state of the selected
      timept.state = !timept.state;

      vm._changeDetectionRef.detectChanges();
    }, 5);

    // Situation 1: turn on the timepoint marker
    if (timept.state === false) {
      // reset all states to false
      this.timepoints.find(d => d.timepoint !== timept.timepoint).state = false;
      this.selTimepoint = timept.timepoint;
    } else {
      this.selTimepoint = null;
    }

    this.timeptEmitter.emit(this.selTimepoint);

  }

}
