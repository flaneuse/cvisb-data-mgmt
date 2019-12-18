import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expt-details',
  templateUrl: './expt-details.component.html',
  styleUrls: ['./expt-details.component.scss']
})
export class ExptDetailsComponent implements OnInit {

  @Input() private form_data: any;

  constructor() { }

  ngOnInit() {
    console.log('startign expt')
    console.log(this.form_data)
  }

}
