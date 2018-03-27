import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-grp',
  templateUrl: './grid-grp.component.html',
  styleUrls: ['./grid-grp.component.scss']
})
export class GridGrpComponent implements OnInit {

  private codes: Array<Object> = [
    { 'code': 0, 'id': 's0', 'status': {'label': 'experiment abandoned', 'stuck_label': 'done: no available sample'} },
    { 'code': 1, 'id': 's1', 'status': {'label': 'sample not arrived', 'stuck_label': 'awaiting shipment from Sierra Leone'} },
    { 'code': 2, 'id': 's2', 'status': {'label': 'not started', 'stuck_label': 'awaiting experiment'} },
    { 'code': 3, 'id': 's3', 'status': {'label': 'experiment started', 'stuck_label': 'awaiting results'} },
    { 'code': 4, 'id': 's4', 'status': {'label': 'raw data uploaded', 'stuck_label': 'awaiting analysis'} },
    { 'code': 5, 'id': 's5', 'status': {'label': 'analysis complete', 'stuck_label': 'done'} }
  ];

  @Input() private data: Array<number>;
  private filteredData: Array<Array<number>> = [];
  private maxLength: number;

  constructor() { }

  ngOnInit() {
    // console.log(this.data)

    let arr = [];

    for(var i = 0; i < this.codes.length; i++) {
      let code = this.codes[i].code;
      // console.log(code)
      this.filteredData[code] = this.data.filter(d => d === code);

    }
    // console.log(this.filteredData)
    var lengths = (this.filteredData.map(d => d.length));
    // console.log(lengths)
    // TODO: clean up sizing, add resizing on window change
    this.maxNum = Math.max(... this.filteredData.map(d => d.length));
  }

}
