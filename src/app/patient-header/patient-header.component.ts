import { Component, OnInit, OnChanges } from '@angular/core';

import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


// Data service
import { Patient } from '../classes/patient';
import { GetPatientRosterService } from "../data-services/get-patient-roster.service"

export class User {
  constructor(
    public name: string,
    public patient_id: string,
    public sex: string,
    public age: number,
    public cohort: string,
    public cohort_exposure: string,
    public timepoints: Array<number>
  ) { }
}

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.scss'],
  providers: [GetPatientRosterService]
})
export class PatientHeaderComponent implements OnInit {

  private patients: Array<Patient> = [];
  private patientIDs: Array<string> = [];
  patientCtrl: FormControl = new FormControl();
  currentPatient: Object;

  options: any;


  filteredOptions: Observable<Patient[]>;



  constructor(private roster: GetPatientRosterService) {
  }



  ngOnInit() {
    this.patients = this.roster.createFakePatients();
    this.options = this.patients;


    this.filteredOptions = this.patientCtrl.valueChanges
      .pipe(
      startWith<string | Patient>(''),
      map(value => typeof value === 'string' ? value : value.patient_id),
      map(patient_id => patient_id ? this.filter(patient_id) : this.options.slice())
      );

        console.log(this.patientCtrl.valueChanges)
  }


  filter(patient_id: string): Patient[] {
    return this.patients.filter(option =>
      option.patient_id.toLowerCase().indexOf(patient_id.toLowerCase()) === 0);
  }

  displayFn(user?: Patient): string | undefined {
    return user ? user.patient_id : undefined;
  }


  ngOnChanges() {
  }

  // For Patient ID select, only display the ID
  displayFunc(user?): string | undefined {
    return user ? user.patient_id : undefined;
  }

  changeID(event, new_patient){
    console.log("CHANGED!")
    if(event.isUserInput) {
      // see https://github.com/angular/material2/issues/4094
    console.log(new_patient.patient_id)
    this.currentPatient = new_patient;
  }
  }

}
