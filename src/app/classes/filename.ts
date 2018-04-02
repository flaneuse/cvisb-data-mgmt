export class Filename {
  public patient_id: string;
  public timepoint: number;
  public sample_id: string;
  public expt_id: string;
  public date_expt?: Date;
  public ext?: string;
  public opts?: string;

  constructor(options: any) {
    this.patient_id = options.patient_id;
    this.timepoint = options.timepoint;
    this.sample_id = options.sample_id;
    this.expt_id = options.expt_id;
    this.date_expt = options.date_expt;
    this.ext = options.ext;
    this.opts = options.opts;
  }

  concat(): string {
    let beg = this.patient_id + '_T' + this.timepoint + '-' + this.sample_id + '_' + this.expt_id;

    let mid = '';

    let date = '';

    let end = '';

    if(this.opts) {
      mid = this.opts;
    }

    if(this.date_expt) {
      // REMEMBER: months are 0-indexed in js
      date = "_" + this.date_expt.getFullYear() + "-" + String(this.date_expt.getMonth() + 1).padStart(2,"0") + "-" + String(this.date_expt.getDate()).padStart(2,"0");
    }

    if (this.ext) {
      end = this.ext;
    }

    return beg + mid + date + end;
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
