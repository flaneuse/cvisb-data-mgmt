import { Component } from '@angular/core';
// import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CViSB broswer';
  navLinks = [{'path': 'patient', 'label': 'patient-file browser'},
{'path': 'sample-naming', 'label': 'sample file naming standards'},
{'path': 'patient-tracker', 'label': 'patient tracker'}]
}
