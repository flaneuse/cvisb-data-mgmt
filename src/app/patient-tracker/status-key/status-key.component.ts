import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-key',
  templateUrl: './status-key.component.html',
  styleUrls: ['./status-key.component.scss']
})
export class StatusKeyComponent implements OnInit {

  private codes: Array<Object> = [
    { 'code': 0, 'status': 'experiment abandoned' },
    { 'code': 1, 'status': 'sample not arrived' },
    { 'code': 2, 'status': 'not started' },
    { 'code': 3, 'status': 'started' },
    { 'code': 4, 'status': 'raw data uploaded' },
    { 'code': 5, 'status': 'analysis complete' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
