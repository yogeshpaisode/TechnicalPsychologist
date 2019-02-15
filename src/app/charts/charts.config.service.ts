import {Injectable} from '@angular/core';

@Injectable()
export default class ChartsConfigService {

  public getChartConfig(title: string, score: number): any {
    return {
      chart: {
        plotShadow: true,
        type: 'pie'
      },
      title: {
        text: title.toUpperCase()
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: title,
        colorByPoint: true,
        data: [{
          name: title,
          y: score,
          sliced: true,
          selected: true
        }, {
          name: 'Need to Improve',
          y: (100 - score)
        }]
      }]
    };
  }

}
