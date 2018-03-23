import { Component, OnInit } from '@angular/core';

import { GetExptListService } from '../data-services/get-expt-list.service';

@Component({
  selector: 'app-lab-selector',
  templateUrl: './lab-selector.component.html',
  styleUrls: ['./lab-selector.component.scss'],
  providers: [GetExptListService]
})
export class LabSelectorComponent implements OnInit {
  lab_opts: Set<string>;
  labs: Set<string>;

  constructor(private exptSvc: GetExptListService) {
    this.lab_opts = this.exptSvc.getLabs();
    this.labs = new Set(this.lab_opts)
  }

  ngOnInit() {
  }

  filterLabs(lab: string, check_value) {
    console.log("FILTERED")
    console.log(check_value)

    if(check_value === true){
      this.labs.add(lab)
  } else {
    this.labs.delete(lab)
  }
    console.log(this.labs)

  }

}
