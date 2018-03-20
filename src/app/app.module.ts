import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


// Helpers
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";

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
    SampleDetailsComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
