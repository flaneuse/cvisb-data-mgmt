export class Patient {
  constructor(
    public patient_id: string,
    public sex: string,
    public age: number,
    public cohort: string,
    public cohort_exposure: string,
    public timepoints: Array<number>
  ) { }
}
