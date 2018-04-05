import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';
// import { swoopyArrow } from '../../classes/swoopyArrow';

@Component({
  selector: 'app-expt-summary',
  templateUrl: './expt-summary.component.html',
  styleUrls: ['./expt-summary.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ExptSummaryComponent implements OnInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<number>;

  private element: any;
  private margin: any = { top: 25, bottom: 25, left: 75, right: 25 };
  private width: number;
  private height: number;

  private spacing: number = 1 / 4; // factor for how much white space will be between the rectangles, in rectangular units
  private diameter: number;
  private grid_width: number;

  private num_total: number = 40;
  private num_complete: number = 10;

  private codes: Array<Object> = [
    { 'code': 2, 'status': 'shipped' },
    { 'code': 3, 'status': 'started' },
    { 'code': 4, 'status': 'raw data uploaded' },
    { 'code': 5, 'status': 'analysis complete' }
  ];

  private totals: any;

  constructor() { }

  ngOnInit() {
    this.plotBargraph();

  }

  calcOccurrence(arr: Array<number>, target: number) {
    let count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
      }
    }
    return count;
  }


  calcTotals() {
    let calcTotal = function(arr: Array<number>, target: number, dead_ends: number = 1) {
      let count = 0;

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= target && arr[i] > dead_ends) {
          count++;
        }
      }
      return count;
    }

    for (var j = 0; j < this.codes.length; j++) {
      this.codes[j]['value'] = calcTotal(this.data, this.codes[j].code);
    }

  }

  plotBargraph() {

    this.calcTotals(); // Summarize the data

    // TODO: make this not jankey
    let abandonded_val = this.calcOccurrence(this.data, 0);
    let total = this.data.length;
    let total_valid = total - abandonded_val;

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
      .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");

// swoopy arrows. Thanks Adam Pearce.
// <marker id="arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0" markerWidth="20" markerHeight="20" stroke-width="1" orient="auto"><polyline stroke-linejoin="bevel" points="-6.75,-6.75 0,0 -6.75,6.75"></polyline></marker>
// var swoopy = new swoopyArrow()
//   .angle(Math.PI/4)
//   .x(function(d) { return d[0]; })
//   .y(function(d) { return d[1]; });
//
// svg.append("path")
//   .attr('marker-end', 'url(#arrowhead)')
//   .datum([[100,200],[300,400]])
//   .attr("d", swoopy);

    // ALIGNED LEFT VERSION
    // set scale
    let x = d3.scaleLinear()
      .domain([0, total])
      .range([0, this.width]);

    let y = d3.scaleBand()
      .domain(this.codes.map(d => d.status))
      .range([0, this.height])
      .paddingInner(0.25);

    // DRAW Y-AXIS
    let yAxis = d3.axisRight(y)
      .tickPadding(5);

    g.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis);

    // DRAW TARGET RECTANGLE
    g.selectAll('.targets')
      .data(this.codes)
      .enter().append('rect')
      .attr('class', 'target-rect')
      .attr('width', x(total))
      .attr('height', y.bandwidth())
      .attr('x', 0)
      .attr('y', d => y(d.status));

    // DRAW ABANDONED RECTANGLES
    g.selectAll('.aborted-rect')
      .data(this.codes)
      .enter().append('rect')
      .attr('class', d => 's0')
      .classed('aborted-rect', true)
      .attr('width', d => x(abandonded_val))
      .attr('height', y.bandwidth())
      .attr('x', x(this.data.length - abandonded_val))
      .attr('y', d => y(d.status));


    // DRAW CUMULATIVE SUM RECTANGLES
    g.selectAll('.finished-rect')
      .data(this.codes)
      .enter().append('rect')
      .attr('class', d => 's' + d.code)
      .classed('finished-rect', true)
      .attr('width', d => x(d.value))
      .attr('height', y.bandwidth())
      .attr('x', 0)
      .attr('y', d => y(d.status));

    // DRAW PERCENT COMPLETE
    g.selectAll('.pct-annot')
      .data(this.codes)
      .enter().append('text')
      .attr('class', d => 's' + d.code)
      .classed('pct-annot annot-right', true)
      .attr('x', 0)
      .attr('y', d => y(d.status) + y.bandwidth() / 2)
      .attr('dx', '-10px')
      .text(d => d3.format(".0%")(d.value / total));

    // Annotate if some samples have been discarded
    if(abandonded_val > 0) {
    g.append('text')
      .attr('class','abandoned annot-right')
      .attr('x', this.width)
      .attr('y', 0)
      .attr('dy', '-' + this.margin.top)
      .text("no sample available");
  }

    // // X-AXIS
    // // for testing purposes only
    // let xAxis = d3.axisBottom(x).tickPadding(18).tickSize(-this.height);
    //
    // g.append("g")
    //   .attr("class", "axis axis--x")
    //   .attr('transform', "translate(0, " + (this.height) + ")")
    //   .call(xAxis);
  }

}
