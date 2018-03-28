import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ExptParams } from '../../../classes/experiment';
import { GetExptListService } from '../../../data-services/get-expt-list.service';


@Component({
  selector: 'app-param-field',
  templateUrl: './param-field.component.html',
  styleUrls: ['./param-field.component.scss']
  // providers: [GetExptListService]
})
export class ParamFieldComponent {
  @Input() question: ExptParams<any>;
  @Input() form: FormGroup;


  constructor(private exptSvc: GetExptListService) {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }


  changeParam(event: any, opt: any, field: string) {
    if (event.isUserInput == true && field === 'expt_type') {
      console.log(opt)

      this.exptSvc.changeExpt(opt.key);
    }
  }

}
