import { Component } from '@angular/core';
// import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CViSB broswer';
  navLinks = [
    { 'path': 'samples', 'label': 'sample browser' },
    { 'path': 'sample-naming', 'label': 'sample file naming standards' },
    { 'path': 'patient', 'label': 'patient-file browser' },
    { 'path': 'expt-tracker', 'label': 'experiment tracker' },
    { 'path': 'patient-tracker', 'label': 'patient tracker' }
  ]
}
