import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Experiment } from '../../classes/experiment';
import { GetExptListService } from '../../data-services/get-expt-list.service';

@Component({
  selector: 'app-expt-params',
  templateUrl: './expt-params.component.html',
  styleUrls: ['./expt-params.component.scss']
})

export class ExptParamsComponent implements OnInit {

  private expt_list: Array<Experiment>;
  private current_expt: string = 'HLA'; //['antibody', 'tcr', 'HLA']
  private formData: any;

  reqParams: any[];
  exptParams: any[];

  subscription: Subscription;


  constructor(private exptSvc: GetExptListService) {

    this.reqParams = exptSvc.getReqParams();
    this.exptParams = exptSvc.getExptParams(this.current_expt);

    this.subscription = exptSvc.exptAnnounced$.subscribe(
      expt_type => {
        // this.current_expt =
        this.exptParams = expt_type;
      });

  }


  ngOnInit() {
    this.expt_list = this.exptSvc.createExptList();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  onParamsEmit(form) {
    this.formData = form;
  }

}
