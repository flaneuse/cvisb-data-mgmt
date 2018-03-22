import { Component, Input } from '@angular/core';

import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../../../classes/question-base';

@Component({
  selector: 'app-param-field',
  templateUrl: './param-field.component.html',
  styleUrls: ['./param-field.component.scss']
})
export class ParamFieldComponent {
    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }
  }
