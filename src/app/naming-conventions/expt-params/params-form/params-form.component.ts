import { Component, Input, OnInit, OnChanges, Output, EventEmitter }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { ExptParams }              from '../../../classes/experiment';
import { QuestionControlService }    from '../../../data-services/question-control.service';

@Component({
  selector: 'app-params-form',
  templateUrl: './params-form.component.html',
  styleUrls: ['./params-form.component.scss'],
  providers: [ QuestionControlService ]
})
export class ParamsFormComponent implements OnInit {

  @Input() questions: ExptParams<any>[] = [];
  @Input() req_params: ExptParams<any>[] = [];
  @Input() expt_params: ExptParams<any>[] = [];
  form: FormGroup;
  payLoad = '';
  @Output() paramsEmitter = new EventEmitter<any>();

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    this.createForm();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.form.value)

    this.paramsEmitter.emit(this.form.value);
  }

  changeExpt(new_expt:string) {
    console.log("CHANGED EXPT")
    console.log(new_expt)
  }

  createForm() {
    this.questions = this.req_params.concat(this.expt_params);
    console.log("QUESTIONS")
    console.log(this.questions)
    this.form = this.qcs.toFormGroup(this.questions);
  }
}
