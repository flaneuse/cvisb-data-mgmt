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
  private margin: number = 10;
  private width: number;
  private height: number;

  private spacing: number = 1 / 4; // factor for how much white space will be between the rectangles, in rectangular units
  private diameter: number;
  private grid_width: number;
  private rects: any;

  constructor() { }

  ngOnInit() {
    this.plotGridPlot();
  }

  plotGridPlot() {
    // Get size and container of the outer holder
    // BUG: this.element.offsetWidth is systemmatically larger than it should be.
    this.element = this.chartContainer.nativeElement;
    let element_dims = this.element.getBoundingClientRect();

    // console.log(this.element)
    //
    // console.log(element_dims)

    // specify width of SVG to keep aspect ratio of axes at 1.
    let svg_width = Math.min(this.element.offsetWidth, this.element.offsetHeight);
    // console.log(svg_width)
    // TODO: fix hack
    svg_width = svg_width * 0.75;
    // let svg_width = element_dims.width;
    this.width = svg_width - this.margin * 2;
    this.height = svg_width - this.margin * 2;

    // Determine the number per row to be whatever most closely generates a square
    // let num_patients = this.data.length;
    let num_patients = 40;
    this.grid_width = Math.ceil(Math.sqrt(this.max_num));
    // console.log(this.grid_width)

    // TODO: fix hack
    if (this.grid_width < 10) {
      this.diameter = 15;
    } else {
      this.diameter = 5;
    }
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
    let svg_domain = Math.max(this.grid_width, Math.ceil(this.max_num / this.grid_width));

    let x = d3.scaleLinear()
      .range([0, this.width])
      .domain([0, svg_domain]);

    let y = d3.scaleLinear()
      .range([0, this.height])
      .domain([0, svg_domain]);

    this.rects = d3.selectAll('text');

    // Grid plot
    g.selectAll('.grid')
      .data(this.filtered_data)
      .enter().append('rect')
      .attr('class', (d, i) => 's' + d)
      .attr('id', (d, i) => "expt" + i)
      .classed('grid', true)
      .attr('x', (d, i) => x(i % this.grid_width))
      .attr('y', (d, i) => y(Math.floor(i / this.grid_width)))
      .attr('width', this.diameter)
      .attr('height', this.diameter)
      .attr('matTooltip', 'patient G0005')
      .attr("cdk-describedby-host", "")
      .attr("aria-describedby", "cdk-describedby-message-0")
      .attr('ng-reflect-message', 'patient G0005')
      .on('mouseover', (d, i) => this.addTooltip(d, i))
      .on('mouseout', (d, i) => this.removeTooltip(d, i))

    // TODO: more sophisticated tooltips
    // TODO: pass actual patient names + info :)
    g.selectAll("text")
      .data(this.filtered_data)
      .enter().append('text')
      .attr('class', 'tooltip')
      .attr('id', (d, i) => "expt" + i)
      .attr('x', (d, i) => x(i % this.grid_width))
      .attr('dy', 30)
      .attr('y', (d, i) => y(Math.floor(i / this.grid_width)))
      .text('patient G00003')
      .attr('display', 'none');

  }

  addTooltip(d, i) {
    d3.select(this.element).selectAll('.tooltip#expt' + i).attr('display', 'block')
  }

  removeTooltip(d, i) {
    d3.select(this.element).selectAll('.tooltip#expt' + i).attr('display', 'none')
  }
}
