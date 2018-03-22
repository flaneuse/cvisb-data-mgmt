import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../../../classes/question-base';
import { QuestionControlService }    from '../../../data-services/question-control.service';

@Component({
  selector: 'app-params-form',
  templateUrl: './params-form.component.html',
  styleUrls: ['./params-form.component.scss'],
  providers: [ QuestionControlService ]
})
export class ParamsFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.form.value)
  }
}
