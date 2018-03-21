import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class PatientSummaryComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private num_total: number;
  @Input() private num_complete: number;

  private element: any;
  private margin: any = { top: 10, bottom: 10, left: 20, right: 30 };
  private width: number;
  private height: number;

  constructor() { }

  ngOnInit() {
    this.plotBargraph();
  }

  plotBargraph() {

    // Get size and container of the outer holder
    // BUG: this.element.offsetWidth is systemmatically larger than it should be.
    this.element = this.chartContainer.nativeElement;
    let element_dims = this.element.getBoundingClientRect();
    this.width = this.element.offsetWidth - this.margin.left - this.margin.right;
    this.height = this.element.offsetHeight - this.margin.top - this.margin.bottom;

    // define SVG container
    const svg = d3.select(this.element)
      .append('svg')
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    var g = svg.append('g')
      .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")


    // // ALIGNED LEFT VERSION
    // // set scale
    // let x = d3.scaleLinear()
    //   .domain([0, this.num_total])
    //   .range([0, this.width]);
    //
    // // target base
    // g.append('rect')
    //   .attr('class', 'target-rect')
    //   .attr('width', x(this.num_total))
    //   .attr('height', this.height)
    //   .attr('x', 0)
    //   .attr('y', 0)
    //
    // // NOTE: being lazy and not binding data to the svg, since there's only one value
    // g.append('rect')
    //   .attr('class', 'complete-rect')
    //   .attr('width', x(this.num_complete))
    //   .attr('height', this.height)
    //   .attr('x', 0)
    //   .attr('y', 0)

    // ALIGNED RIGHT VERSION
    // set scale
    let x = d3.scaleLinear()
      .domain([this.num_total, 0])
      .range([0, this.width]);

    // target base
    g.append('rect')
      .attr('class', 'target-rect')
      .attr('width', this.width - x(this.num_total))
      .attr('height', this.height)
      .attr('x', x(this.num_total))
      .attr('y', 0)

    // NOTE: being lazy and not binding data to the svg, since there's only one value
    g.append('rect')
      .attr('class', 'complete-rect')
      .attr('width', this.width - x(this.num_complete))
      .attr('height', this.height)
      .attr('x', x(this.num_complete))
      .attr('y', 0)

    //    X-AXIS
    // for testing purposes only
    // let xAxis = d3.axisBottom(x).tickPadding(18);
    //
    // g.append("g")
    //   .attr("class", "axis axis--x")
    //   .attr('transform', "translate(0, " + (this.height) + ")")
    //   .call(xAxis);

  }

}
