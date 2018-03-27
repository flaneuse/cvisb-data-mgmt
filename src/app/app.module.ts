import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


// Helpers
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";

// TEMPORARY FIX FOR FAKE DATA
// TODO: remove me with real data
import { GetPatientRosterService } from './data-services/get-patient-roster.service';

// Custom components
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SampleLocComponent } from './patient/sample-loc/sample-loc.component';
import { PatientFilesComponent } from './patient/patient-files/patient-files.component';
import { NamingConventionsComponent } from './naming-conventions/naming-conventions.component';
import { ExptParamsComponent } from './naming-conventions/expt-params/expt-params.component';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { PatientTrackerComponent } from './patient-tracker/patient-tracker.component';
import { PatientStoplightComponent } from './patient-tracker/patient-stoplight/patient-stoplight.component';
import { CopyFilenameComponent } from './naming-conventions/copy-filename/copy-filename.component';
import { SampleDetailsComponent } from './naming-conventions/sample-details/sample-details.component';
import { PatientSummaryComponent } from './patient-tracker/patient-summary/patient-summary.component';
import { StatusKeyComponent } from './patient-tracker/status-key/status-key.component';
import { ExptTrackerComponent } from './expt-tracker/expt-tracker.component';
import { ParamFieldComponent } from './naming-conventions/expt-params/param-field/param-field.component';
import { ParamsFormComponent } from './naming-conventions/expt-params/params-form/params-form.component';
import { GridPlotComponent } from './expt-tracker/grid-plot/grid-plot.component';
import { LabSelectorComponent } from './lab-selector/lab-selector.component';
import { ExptSummaryComponent } from './expt-tracker/expt-summary/expt-summary.component';
import { ExptDetailsComponent } from './naming-conventions/expt-params/expt-details/expt-details.component';
import { FileTableComponent } from './patient/patient-files/file-table/file-table.component';
import { GridGrpComponent } from './expt-tracker/grid-grp/grid-grp.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PatientComponent,
    SampleLocComponent,
    PatientFilesComponent,
    NamingConventionsComponent,
    ExptParamsComponent,
    PatientHeaderComponent,
    PatientTrackerComponent,
    PatientStoplightComponent,
    CopyFilenameComponent,
    SampleDetailsComponent,
    PatientSummaryComponent,
    StatusKeyComponent,
    ExptTrackerComponent,
    ParamFieldComponent,
    ParamsFormComponent,
    GridPlotComponent,
    LabSelectorComponent,
    ExptSummaryComponent,
    ExptDetailsComponent,
    FileTableComponent,
    GridGrpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [GetPatientRosterService], // TODO: remove when get real data
  bootstrap: [AppComponent]
})
export class AppModule { }
