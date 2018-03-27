import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';


@Component({
  selector: 'app-grid-plot',
  templateUrl: './grid-plot.component.html',
  styleUrls: ['./grid-plot.component.scss'],
  encapsulation: ViewEncapsulation.Native
})

export class GridPlotComponent implements OnInit {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<number>;
  @Input() private max_num: number;
  @Input() private current_code: number;
  @Input() private status: Object;
  @Input() private code: number;


  @Input() filtered_data: Array<number>;

  private element: any;
  private margin: number = 25;
  private width: number;
  private height: number;

  private spacing: number = 1 / 4; // factor for how much white space will be between the rectangles, in rectangular units
  private diameter: number = 18;
  private grid_width: number = 5;

  constructor() { }

  ngOnInit() {
    this.plotGridPlot();
  }

  plotGridPlot() {
    // Get size and container of the outer holder
    // BUG: this.element.offsetWidth is systemmatically larger than it should be.
    this.element = this.chartContainer.nativeElement;
    let element_dims = this.element.getBoundingClientRect();

    // specify width of SVG to keep aspect ratio of axes at 1.
    // let svg_width = Math.min(this.element.offsetWidth, this.element.offsetHeight);
    let svg_width = 250;
    this.width = svg_width - this.margin * 2;
    this.height = svg_width - this.margin * 2;

    // Determine the number per row to be whatever most closely generates a square
    // let num_patients = this.data.length;
    let num_patients = 40;
    this.grid_width = Math.ceil(Math.sqrt(this.max_num));
    //
    // // Determine a nice spacing between the squares
    // let white_space = (this.grid_width - 1) * this.spacing;
    // this.diameter = Math.round((this.width / (this.grid_width + white_space)));


    // define SVG container
    const svg = d3.select(this.element)
      .append('svg')
      // .style('background-color', 'aliceblue')
      .attr("width", this.width + this.margin * 2)
      .attr("height", this.height + this.margin * 2);

    var g = svg.append('g')
      .attr('transform', "translate(" + this.margin + ", " + this.margin + ")");

    // Set up axes
    // x will be as wide as grid_width - 1 (since base 0)
    // y will be as long as ceil(length / grid_width) - 1
    // To keep the axes symmetric, the larger of the two is taken.
    let svg_domain = Math.max(this.grid_width, Math.ceil(num_patients / this.grid_width)) - 1;

    let x = d3.scaleLinear()
      .range([0, this.width])
      .domain([0, svg_domain]);

    let y = d3.scaleLinear()
      .range([0, this.height])
      .domain([0, svg_domain]);

    // Grid plot
    g.selectAll('.grid')
      .data(this.filtered_data)
      .enter().append('rect')
      .attr('class', (d, i) => 's' + d)
      .classed('grid', true)
      .attr('x', (d, i) => x(i % this.grid_width))
      .attr('y', (d, i) => y(Math.floor(i / this.grid_width)))
      .attr('width', this.diameter)
      .attr('height', this.diameter);



  }
}
