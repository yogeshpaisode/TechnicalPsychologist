import {Component, Input, OnInit} from '@angular/core';
import ChartsConfigService from './charts.config.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  private Highcharts: any = Highcharts;
  private score: number;
  private title: string;

  private chartOptions: any

  constructor(private chartsConfigService: ChartsConfigService) { }

  @Input()
  set r_score(score: number) {
    this.score = score;
  }

  @Input()
  set r_title(title: string) {
    this.title = title;
    this.setChartOptions();
  }

  ngOnInit() {
    this.setChartOptions();
  }

  private setChartOptions(): void {
    this.chartOptions = this.chartsConfigService.getChartConfig(this.title, this.score);
  }

  private onChartInstance(): void {

  }

}
