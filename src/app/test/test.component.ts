import {Component, OnInit} from '@angular/core';

import TestDataService from './test-data.service';
import {image} from '../app.constatnt';
import AppStatic from '../app.static';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'test-component',
  templateUrl: 'test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private class: string = 'KG';
  private testType: string = 'Reading';
  private initialIndex: number = -1;
  private data: any[];
  private result: any[];
  private currentQuestion: any;
  private isNextActive: boolean = true;

  private _Image: string = image;

  constructor(private testDataService: TestDataService) {}

  ngOnInit(): void {
    this.data = JSON.parse(JSON.stringify(this.testDataService.testData.kg));
    this.result = JSON.parse(JSON.stringify(this.testDataService.result));
    this.onNext();
  }

  private onNext(): void {
    this.initialIndex ++;
    this.isNextActive = this.initialIndex < this.data.length;
    if (this.isNextActive) {
      this.currentQuestion = this.data[this.initialIndex];
    }
  }

  private calculateResult(): void {
    let problemType: string;
    let score: number = 0;
    let counter: number = 0;
    this.result.forEach((result: any) => {
      problemType = result.type;
      result['categories'].forEach((category: string) => {
            this.data.forEach((question: any) => {
              if ((problemType === question.disabilityType) && (question.learningType === category['type'])) {
                counter ++;
                score += question.weightage;
              }
            });
        category['score'] = (score / counter);
        score = 0;
        counter = 0;
      });
      problemType = '';
    });

    AppStatic.resultSubkect.next(this.result);
  }
}
