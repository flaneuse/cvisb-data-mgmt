import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import {PatientComponent } from './patient/patient.component';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'patient', component: PatientComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [    RouterModule.forRoot(appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
