export class Filename {
  constructor(
    public patient_id: string,
    public timepoint: number,
    public sample_id: string,
    public expt_id: string
  ) { }

  concat(){
    return this.patient_id + '_T' + this.timepoint + '_' + this.sample_id + '_' + this.expt_id + '_';

  }
}
