import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


// Helpers
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom components
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SampleLocComponent } from './patient/sample-loc/sample-loc.component';
import { PatientFilesComponent } from './patient/patient-files/patient-files.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PatientComponent,
    SampleLocComponent,
    PatientFilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
