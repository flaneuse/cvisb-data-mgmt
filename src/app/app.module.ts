import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
