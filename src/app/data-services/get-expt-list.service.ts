import { Injectable } from '@angular/core';

import { Experiment, Param } from '../classes/experiment';



@Injectable()
export class GetExptListService {
  public expts: Array<Experiment>;
  private alltimepts: Array<number> = [1, 2, 3, 4, 7, 10];

  constructor() { }

  createExptList() {

    var metadata: Experiment = {
      lab: 'Tulane', expt_type: 'metadata',
      expt_label: 'patient metadata', expt_description: 'patient metadata',
      expt_cat: 'metadata', cat_order: 0, file_types: ['.csv'],
      params: [],
      timepoints: [0],
      dropbox: '/CViSB/Data//'
    };

    var piccolo: Experiment = {
      lab: 'Tulane', expt_type: 'piccolo',
      expt_label: 'Piccolo metabolites', expt_description: 'Piccolo metabolism assays',
      expt_cat: 'clinical_data', cat_order: 1, file_types: ['.csv'],
      params: [],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data//'
    };

    var kenzen: Experiment = {
      lab: 'Tulane', expt_type: 'kenzen',
      expt_label: 'Kenzen sensors', expt_description: 'Kenzen sensor data: ECG, core body temperature, movement',
      expt_cat: 'clinical_data', cat_order: 1, file_types: ['.csv'],
      params: [],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Kenzen/'
    };

    var elisa: Experiment = {
      lab: 'Tulane', expt_type: 'elisa',
      expt_label: 'ELISA', expt_description: 'ELISA',
      expt_cat: 'clinical_data', cat_order: 1, file_types: ['.csv'],
      params: [],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/ELISA/'
    };

    var qpcr: Experiment = {
      lab: 'Tulane', expt_type: 'qpcr',
      expt_label: 'qPCR viral load', expt_description: 'qPCR viral load',
      expt_cat: 'clinical_data', cat_order: 1, file_types: ['.csv'],
      params: [],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data//'
    };


    var hla: Experiment = {
      lab: 'Andersen', expt_type: 'HLA',
      expt_label: 'HLA sequencing', expt_description: 'HLA typing',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.csv', '.bam'],
      params: [
        new Param("library prep version", [], "input"),
        new Param("Analysis pipeline version", ["Illumina TruSight HLA v2"], "select"),
        new Param("read length", [], "input"),
        new Param("Sequencing Technology", ["Illumina"], "select"),
        new Param("Sequencing Platform", ["MiSeq"], "select"),
        new Param("Sequencing Instrument ID", [], "input"),
        new Param("Sequencing Center", ["TSRI"], "select"),
        new Param("replicate", [], "checkbox")
      ],
      timepoints: [1],
      dropbox: '/CViSB/Data/Sequencing - HLA/'
    };

    var viralseq: Experiment = {
      lab: 'Andersen', expt_type: 'viralseq',
      expt_label: 'Amplicon virus sequencing', expt_description: 'Targeted virus sequencing will be performed for each individual at each timepoint',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.bam', '.fasta', '.VCF', '_analysis.fasta', '_analysis.phylip', '_analysis.xml', '_analysis.log'],
      params: [
        new Param("Amplicon prep version", ["Lassa virus targeting v1", "Ebola virus targeting v1"], "select"),
        new Param("library prep version", ["TSRI targeted RNA sequencing v2"], "select"),
        new Param("Analysis pipeline version", [], "input"),
        new Param("Reference for assembly", [], "input"),
        new Param("read length", [], "input"),
        new Param("Sequencing Technology", ["Illumina"], "select"),
        new Param("Sequencing Platform", ["MiSeq"], "select"),
        new Param("Sequencing Instrument ID", [], "input"),
        new Param("Sequencing Center", ["TSRI"], "select"),
        new Param("replicate", [], "checkbox")
      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Sequencing - Virus/'
    };

    var metagenome: Experiment = {
      lab: 'Andersen', expt_type: 'metagenome',
      expt_label: 'Metagenomic sequencing', expt_description: 'Untargeted metagenomic RNA sequencing for each individual on a single time point',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.bam', '.html'],
      params: [
        new Param("library prep version", ["TSRI targeted RNA sequencing v2"], "select"),
        new Param("Analysis pipeline version", [], "input"),
        new Param("Metagenomic database", [], "input"),
        new Param("Metagenomic database version", [], "input"),
        new Param("read length", [], "input"),
        new Param("Sequencing Technology", ["Illumina"], "select"),
        new Param("Sequencing Platform", ["MiSeq"], "select"),
        new Param("Sequencing Instrument ID", [], "input"),
        new Param("Sequencing Center", ["TSRI"], "select"),
        new Param("replicate", [], "checkbox")
      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Sequencing - Metagenomic/'
    };

    var bcr: Experiment = {
      lab: 'Briney', expt_type: 'bcr',
      expt_label: 'BCR repertoire', expt_description: 'BCR repertoire sequencingg',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.json', '.fastq'],
      params: [
        new Param("Primer set", [], "input"),
        new Param("Analysis pipeline version", [], "input"),
        new Param("Abstar version", [], "input"),
        new Param("Germline database version", [], "input"),
        new Param("Read length", [], "input"),
        new Param("Sequencing Technology", ["Illumina"], "select"),
        new Param("Sequencing Platform", ["MiSeq"], "select"),
        new Param("Sequencing Instrument ID", [], "input"),
        new Param("Sequencing Center", ["TSRI"], "select")
      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Sequencing - Repertoire_BCR/'
    };

    var tcr: Experiment = {
      lab: 'Briney', expt_type: 'tcr',
      expt_label: 'TCR repertoire', expt_description: 'TCR repertoire sequencing',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.json', '.fastq'],
      params: [
        new Param("Primer set", [], "input"),
        new Param("Analysis pipeline version", [], "input"),
        new Param("Abstar version", [], "input"),
        new Param("Germline database version", [], "input"),
        new Param("Read length", [], "input"),
        new Param("Sequencing Technology", ["Illumina"], "select"),
        new Param("Sequencing Platform", ["MiSeq"], "select"),
        new Param("Sequencing Instrument ID", [], "input"),
        new Param("Sequencing Center", ["TSRI"], "select")
      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Sequencing - Repertoire_TCR/'
    };


    var antibody: Experiment = {
      lab: 'Alter', expt_type: 'antibody',
      expt_label: 'Antibody functional data', expt_description: 'Analysis of antibody-mediated induction of innate immune effector functions',
      expt_cat: 'immune', cat_order: 4, file_types: ['.csv', '.xlsx'],
      params: [new Param("assay type", ["ADCP", "ADNKD", "ADCD"], "select"),
      new Param("assay readout", ["phagocytic score", "C3 deposition MFI"], "select"),
      new Param("sample dilution", [], "input"),
      new Param("assay result", [], "input")
      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Systems Serology/'
    };

    this.expts = [metadata, piccolo, kenzen, elisa, qpcr, hla, viralseq, metagenome, bcr, tcr, antibody];

    return this.expts;
  };

  getLabs() {
    let expts = this.createExptList();

    let lablist = expts.map(d => d.lab).sort();

    let labs = new Set(lablist);

    return labs;
  }



}
