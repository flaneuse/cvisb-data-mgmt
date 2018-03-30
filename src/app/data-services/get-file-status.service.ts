import { Injectable } from '@angular/core';

import { Experiment } from '../classes/experiment';
import { Filename, FileStatus } from '../classes/filename';
import { GetExptListService } from './get-expt-list.service';

@Injectable()
export class GetFileStatusService {

  constructor(private exptSvc: GetExptListService) { }

  private expt_list: Array<Experiment>;
  private timepoints: Array<number>;
  private files: any = {};


// modified from http://benjaminzhang.com/blog/intersection-of-two-arrays-in-typescript/
  intersection(array1: any[], array2: any[]): any[] {
    let result: any[] = [];

    for (let el of array2) {
      if (array1.includes(el)) {
        result.push(el);
      }
    }

    return result;
  }

  getFakeFiles(current_patient: Object, current_timepoint: number) {


    // reset to clear any previous obj.
    this.files = {};


    // Get the full list of possible experiments
    this.expt_list = this.exptSvc.createExptList();

    // console.log(this.expt_list)

    // Filter out just the current_timepoint, if specified
    if (current_timepoint) {
      this.expt_list = this.expt_list.filter(d => d.timepoints.includes(current_timepoint));
    } else {
    }


    // loop over categories
    let expt_cats = Array.from(new Set(this.expt_list.map(d => d.expt_cat)));
    // console.log(expt_cats)


    for (var h = 0; h < expt_cats.length; h++) {
      let expt_cat = expt_cats[h];
      let expts = this.expt_list.filter(d => d.expt_cat.includes(expt_cat));
      let tmp_files: Array<FileStatus> = [];

      for (var i = 0; i < expts.length; i++) {
        let expt = expts[i];

        // calculate intersection between the timepoints a patient has available to them, and what the expt calls for
        console.log('intersection')
        console.log(current_patient.timepoints)
        console.log(expt.timepoints)
        let current_timepts = this.intersection(current_patient.timepoints, expt.timepoints);
        console.log(current_timepts)

        for (var j = 0; j < current_timepts.length; j++) {

          for (var k = 0; k < expt.file_types.length; k++) {
            let rand_num = Math.random();

            tmp_files.push(new FileStatus({
              patient_id: current_patient.patient_id,
              timepoint: current_timepts[j],
              sample_id: 'sample.id',
              expt_id: expt.expt_type + '.id',
              ext: expt.file_types[k],
              expt_cat: expt.expt_cat,
              dropbox: expt.dropbox,
              status: this.getFakeStatus(rand_num),
              date_upload: this.getFakeDate(rand_num)
            })
            )
          } // exit loop over file types
        } // exit loop over timepoints
      } // exit loop over different expts

      // TODO: be more clever so only loop over valid timpoints rather than filtering?
      if (current_timepoint !== null) {
        tmp_files = tmp_files.filter(d => d.timepoint === current_timepoint);
      }

      this.files[expt_cat] = tmp_files;
    } // exit loop over categories





    return this.files;

  }

  getFakeStatus(rand_num: number) {
    let statuses = [
      { 'key': 'done', 'value': 'complete' },
      { 'key': 'done', 'value': 'complete' },
      { 'key': 'disabled', 'value': 'not uploaded' },
      { 'key': 'disabled', 'value': 'not uploaded' },
      { 'key': 'abandoned', 'value': 'experiment abandoned' }
    ];

    return statuses[Math.floor(rand_num * statuses.length)];
  }


  getFakeDate(rand_num: number) {

    function randomDate(start: Date, end: Date) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    if (rand_num <= 2 / 5) {
      return randomDate(new Date('January 1, 2018 00:00:00'), new Date('December 31, 2018 00:00:00'));

    } else {
      return null;
    }
  }

}
