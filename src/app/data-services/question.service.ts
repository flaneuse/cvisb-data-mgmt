import { Injectable }       from '@angular/core';

import { DropdownQuestion } from '../classes/question-dropdown';
import { QuestionBase }     from '../classes/question-base';
import { TextboxQuestion, DateQuestion }  from '../classes/question-textbox';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'yukcy',   value: 'yucky'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new DateQuestion({
        key: 'emailAddress2',
        label: 'Email',
        type: 'email',
        order: 0
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
