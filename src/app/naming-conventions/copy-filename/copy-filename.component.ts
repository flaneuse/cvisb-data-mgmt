import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Filename } from '../../classes/filename';
import { Patient } from '../../classes/patient';

@Component({
  selector: 'app-copy-filename',
  templateUrl: './copy-filename.component.html',
  styleUrls: ['./copy-filename.component.scss']
})
export class CopyFilenameComponent implements OnInit {
    @Input() private current_patient: string;
    @Input() private current_timept: number;
    @Input() private params: Object = {};

    private file_ext: Array<string> = ['.bam', '.csv'];
    private current_file: Filename;
     // = 'G00001_T1_HLA_lib1_rep1';

    constructor(public snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    ngOnInit() {

    }

    ngOnChanges(){
      // console.log(this.current_patient)
      // TODO: service, not hard coded, sample ids, generate replicate number etc.

      this.current_file = new Filename({
        patient_id: this.current_patient,
        timepoint: this.current_timept,
        sample_id: this.params.sample_id,
        expt_id: this.params.expt_type + '1-L' + this.params.library + '.R' + this.params.replicate,
        date_expt: this.params.expt_date
      })

    }



  // Thanks https://stackoverflow.com/questions/45768583/angular-4-copy-text-to-clipboard
    copyTextToClipboard(text) {
      var txtArea = document.createElement("textarea");

      txtArea.style.position = 'fixed';
      txtArea.style.top = '0';
      txtArea.style.left = '0';
      txtArea.style.opacity = '0';
      txtArea.value = text;
      document.body.appendChild(txtArea);
      txtArea.select();
      try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
          if(successful){
              return true;
          }
      } catch (err) {
          console.log('Oops, unable to copy');
      }
      document.body.removeChild(txtArea);
      return false;
  }

    copyText(event) {
      console.log("COPY!")
      console.log(event)
      console.log(event.target.id)

      let result = this.copyTextToClipboard(this.current_file.concat() + event.target.id);

      this.openSnackBar(this.current_file.concat() + event.target.id, 'copied to clipboard')
    }

  }
