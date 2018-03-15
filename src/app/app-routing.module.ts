import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import {PatientComponent } from './patient/patient.component';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'patient', component: PatientComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [    RouterModule.forRoot(appRoutes,
        { enableTracing: false } // <-- true = debugging purposes
      )],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
