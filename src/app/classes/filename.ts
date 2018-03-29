export class Filename {
  public patient_id: string;
  public timepoint: number;
  public sample_id: string;
  public expt_id: string;
  public ext?: string;

  constructor(options: any) {
    this.patient_id = options.patient_id;
    this.timepoint = options.timepoint;
    this.sample_id = options.sample_id;
    this.expt_id = options.expt_id;
    this.ext = options.ext;
  }

  concat(): string {
    if (this.ext) {
      return this.patient_id + '_T' + this.timepoint + this.sample_id + '_' + this.expt_id + this.ext;
    } else {
      return this.patient_id + '_T' + this.timepoint + this.sample_id + '_' + this.expt_id;
    }
  }
}

export class FileStatus extends Filename {
  private status: string;
  private dropbox: string;
  private filename: string;
  private url: string;
  private expt_cat: string;
  private date_upload?: Date;

  constructor(options) {
    super(options);
    this.status = options.status;
    this.date_upload = options.date_upload;
    this.expt_cat = options.expt_cat;
    this.filename = super.concat();
    this.url = options.dropbox + this.filename;
  }
}
