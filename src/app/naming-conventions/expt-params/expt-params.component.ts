import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Experiment } from '../../classes/experiment';
import { GetExptListService } from '../../data-services/get-expt-list.service';

import { QuestionBase } from '../../classes/question-base';
import { QuestionService } from '../../data-services/question.service';

@Component({
  selector: 'app-expt-params',
  templateUrl: './expt-params.component.html',
  styleUrls: ['./expt-params.component.scss'],
  providers: [ GetExptListService, QuestionService ]
})

export class ExptParamsComponent implements OnInit {

  private expt_list: Array<Experiment>;
  // private expts: Array<string> = ['HLA Sequencing', 'Antibody typing', 'Proteomics'];
  // private libs: Array<number> = [1,2,3];

  questions: any[];

  constructor(private exptSvc: GetExptListService, private service: QuestionService) {
    this.questions = service.getQuestions();
    console.log(this.questions);
  }

  ngOnInit() {
    this.expt_list = this.exptSvc.createExptList();

    console.log(this.expt_list);


  }

}
