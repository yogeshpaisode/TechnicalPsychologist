import { Component, OnInit } from '@angular/core';
import ChartsConfigService from './charts.config.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  private Highcharts: any = Highcharts;
  private chartOptions: any = {
    series: [{
      data: [1, 2, 3]
    }]
  };

  constructor(private chartsConfigService: ChartsConfigService) { }

  ngOnInit() {
  }

  private onChartInstance(): void {

  }

}
