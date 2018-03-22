export class Experiment {
  constructor(
    public lab: string,
    public expt_type: string,
    public expt_label: string,
    public expt_description: string,
    public expt_cat: string,
    public cat_order: number,
    public file_types: Array<string>,
    public params: Array<Param>,
    public timepoints: Array<number>,
    public dropbox: string,
    public req_params?: Array<Param> // optional
  ) { }

}

export class Param {
  constructor(
    public label: string,
    public options: Array<string>,
    public type: string
  ) { }

}

export class ExptMetadata {
  constructor(
    public sample_type: string,
    public sample_id: string,
    public patient_id: string,
    public expt_type: string,
    public expt_id: string,
    public expt_date: Date,
    public params: Array<Object>,
  ) { }

}
