import { Injectable } from '@angular/core';

// Import classes for data objects
import { Experiment, ExptParams } from '../classes/experiment';

// Import subject, which allows for comms b/w observables and observers
import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GetExptListService {
  public expts: Array<Experiment>;
  private alltimepts: Array<number> = [1, 2, 3, 4, 7, 10];

  constructor() { }

  // EVENT LISTENER: change experiment type
  // Observable string sources
  private exptAnnouncedSource = new Subject<Array<Experiment>>();

  // Observable string streams
  exptAnnounced$ = this.exptAnnouncedSource.asObservable();

  // Service message commands
  changeExpt(new_expt: string) {
    let new_params = this.getExptParams(new_expt);

    this.exptAnnouncedSource.next(new_params);
  }

  // Create schema for different types of experiments
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
        new ExptParams({ "controlType": "textbox", "key": "library", "label": "library prep version" }),
        new ExptParams({
          "controlType": "dropdown", "key": "analysis_version", "label": "Analysis pipeline version",
          "options": [{ "key": "trusight", "value": "Illumina TruSight HLA v2" }]
        }),
        new ExptParams({ "controlType": "textbox", "key": "read_length", "label": "read length" }),
        new ExptParams({
          "controlType": "dropdown", "key": "seq_tech", "label": "Sequencing Technology",
          "options": [{ "key": "illumina", "value": "Illumina" }]
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "seq_platform", "label": "Sequencing Platform",
          "options": [{ "key": "miseq", "value": "MiSeq" }]
        }),
        new ExptParams({ "controlType": "textbox", "key": "sequencer_id", "label": "Sequencing Instrument ID" }),
        new ExptParams({
          "controlType": "dropdown", "key": "seq_ctr", "label": "Sequencing Center",
          "options": [{ "key": "tsri", "value": "TSRI" }]
        }),
        new ExptParams({ "controlType": "textbox", "key": "replicate", "label": "replicate" })
      ],
      timepoints: [1],
      dropbox: '/CViSB/Data/Sequencing - HLA/'
    };

    var viralseq: Experiment = {
      lab: 'Andersen', expt_type: 'viralseq',
      expt_label: 'Amplicon virus sequencing', expt_description: 'Targeted virus sequencing will be performed for each individual at each timepoint',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.bam', '.fasta', '.VCF', '_analysis.fasta', '_analysis.phylip', '_analysis.xml', '_analysis.log'],
      params: [

        new ExptParams({
          "controlType": "dropdown", "key": "amplicon", "label": "Amplicon prep version",
          "options": [{ "key": "lassa1", "value": "Lassa virus targeting v1" }, { "key": "ebola1", "value": "Ebola virus targeting v1" }]
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "library", "label": "library prep version",
          "options": [{ "key": "tsri_rna2", "value": "TSRI targeted RNA sequencing v2" }]
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "analysis_version", "label": "Analysis pipeline version",
          "options": [{ "key": "trusight", "value": "Illumina TruSight HLA v2" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "assembly_ref", "label": "Reference for assembly"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "read_length", "label": "read length"
        }),
        new ExptParams({
          "controlType":
            "dropdown", "key": "seq_tech", "label": "Sequencing Technology",
          "options": [{ "key": "illumina", "value": "Illumina" }]
        }),
        new ExptParams({
          "controlType":
            "dropdown", "key": "seq_platform", "label": "Sequencing Platform",
          "options": [{ "key": "miseq", "value": "MiSeq" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "sequencer_id", "label": "Sequencing Instrument ID"
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "seq_ctr", "label": "Sequencing Center",
          "options": [{ "key": "tsri", "value": "TSRI" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "replicate", "label": "replicate"
        })
      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Sequencing - Virus/'
    };

    var metagenome: Experiment = {
      lab: 'Andersen', expt_type: 'metagenome',
      expt_label: 'Metagenomic sequencing', expt_description: 'Untargeted metagenomic RNA sequencing for each individual on a single time point',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.bam', '.html'],
      params: [

        new ExptParams({
          "controlType": "dropdown", "key": "library", "label": "library prep version",
          "options": [{ "key": "tsri_rna2", "value": "TSRI targeted RNA sequencing v2" }]
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "analysis_version", "label": "Analysis pipeline version",
          "options": [{ "key": "trusight", "value": "Illumina TruSight HLA v2" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "metagenomic_db", "label": "Metagenomic database"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "metagenomic_db_version", "label": "Metagenomic database version"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "read_length", "label": "read length"
        }),
        new ExptParams({
          "controlType":
            "dropdown", "key": "seq_tech", "label": "Sequencing Technology",
          "options": [{ "key": "illumina", "value": "Illumina" }]
        }),
        new ExptParams({
          "controlType":
            "dropdown", "key": "seq_platform", "label": "Sequencing Platform",
          "options": [{ "key": "miseq", "value": "MiSeq" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "sequencer_id", "label": "Sequencing Instrument ID"
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "seq_ctr", "label": "Sequencing Center",
          "options": [{ "key": "tsri", "value": "TSRI" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "replicate", "label": "replicate"
        })

      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Sequencing - Metagenomic/'
    };

    var bcr: Experiment = {
      lab: 'Briney', expt_type: 'bcr',
      expt_label: 'BCR repertoire', expt_description: 'BCR repertoire sequencingg',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.json', '.fastq'],
      params: [
        new ExptParams({
          "controlType": "textbox", "key": "primer_set", "label": "primer set"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "analysis_version", "label": "Analysis pipeline version"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "abstar_version", "label": "Abstar version"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "germline_db_version", "label": "Germline database version"
        }),

        new ExptParams({
          "controlType": "textbox", "key": "read_length", "label": "read length"
        }),
        new ExptParams({
          "controlType":
            "dropdown", "key": "seq_tech", "label": "Sequencing Technology",
          "options": [{ "key": "illumina", "value": "Illumina" }]
        }),
        new ExptParams({
          "controlType":
            "dropdown", "key": "seq_platform", "label": "Sequencing Platform",
          "options": [{ "key": "miseq", "value": "MiSeq" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "sequencer_id", "label": "Sequencing Instrument ID"
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "seq_ctr", "label": "Sequencing Center",
          "options": [{ "key": "tsri", "value": "TSRI" }]
        })
      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Sequencing - Repertoire_BCR/'
    };

    var tcr: Experiment = {
      lab: 'Briney', expt_type: 'tcr',
      expt_label: 'TCR repertoire', expt_description: 'TCR repertoire sequencing',
      expt_cat: 'sequencing', cat_order: 3, file_types: ['.json', '.fastq'],
      params: [
        new ExptParams({
          "controlType": "textbox", "key": "primer_set", "label": "primer set"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "analysis_version", "label": "Analysis pipeline version"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "abstar_version", "label": "Abstar version"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "germline_db_version", "label": "Germline database version"
        }),

        new ExptParams({
          "controlType": "textbox", "key": "read_length", "label": "read length"
        }),
        new ExptParams({
          "controlType":
            "dropdown", "key": "seq_tech", "label": "Sequencing Technology",
          "options": [{ "key": "illumina", "value": "Illumina" }]
        }),
        new ExptParams({
          "controlType":
            "dropdown", "key": "seq_platform", "label": "Sequencing Platform",
          "options": [{ "key": "miseq", "value": "MiSeq" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "sequencer_id", "label": "Sequencing Instrument ID"
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "seq_ctr", "label": "Sequencing Center",
          "options": [{ "key": "tsri", "value": "TSRI" }]
        })
      ],
      timepoints: this.alltimepts,
      dropbox: '/CViSB/Data/Sequencing - Repertoire_TCR/'
    };


    var antibody: Experiment = {
      lab: 'Alter', expt_type: 'antibody',
      expt_label: 'Antibody functional data', expt_description: 'Analysis of antibody-mediated induction of innate immune effector functions',
      expt_cat: 'immune', cat_order: 4, file_types: ['.csv', '.xlsx'],
      params: [
        new ExptParams({
          "controlType": "dropdown", "key": "assay_type", "label": "assay type",
          "options": [{ "key": "adcp", "value": "ADCP" }, { "key": "adnkd", "value": "ADNKD" }, { "key": "adcd", "value": "ADCD" }]
        }),
        new ExptParams({
          "controlType": "dropdown", "key": "assay_readout", "label": "assay readout",
          "options": [{ "key": "phagocytic_score", "value": "phagocytic score" }, { "key": "c3_mfi", "value": "C3 deposition MFI" }]
        }),
        new ExptParams({
          "controlType": "textbox", "key": "sample_dilution", "label": "sample dilution"
        }),
        new ExptParams({
          "controlType": "textbox", "key": "assay_result", "label": "assay result"
        })
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

  getReqParams() {
    let expts = this.createExptList();

    let expt_list = [];


    for (var i = 0; i < expts.length; i++) {
      let tmp = {};
      tmp['key'] = expts[i].expt_type;
      tmp['value'] = expts[i].expt_label;

      expt_list.push(tmp)
    }


    let questions: ExptParams<any>[] = [
      // TODO: add required
      new ExptParams({
        controlType: 'dropdown',
        required: false,
        key: 'expt_type',
        label: 'experiment',
        options: expt_list,
        order: 1
      }),

      new ExptParams({
        controlType: 'date',
        required: false,
        key: 'expt_date',
        label: 'experiment date',
        order: 3
      }),

      new ExptParams({
        controlType: 'dropdown',
        required: false,
        key: 'sample_id',
        label: 'sample ID',
        options: [
          { key: 'vDNA', value: 'viral DNA' },
          { key: 'hDNA', value: 'host DNA' }
        ],
        order: 2
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getExptParams(expt_type: string) {
    if (expt_type) {
      let expts = this.createExptList();

      expts = expts.filter(d => d.expt_type === expt_type)

      let params = expts.map(d => d.params);
      console.log('filtered params')
      console.log(params[0]);

      if (params.length > 0) {

        return params[0].sort((a, b) => a.order - b.order);
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  getExptNames(sel_labs: Set<string>) {
    let all_expts = this.createExptList();

    let expts = all_expts
      .filter(d => sel_labs.has(d.lab))
      .map(d => d.expt_label);

    return expts;
  }

}
