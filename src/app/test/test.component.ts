import {Component, OnInit} from '@angular/core';

import TestDataService from './test-data.service';

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
  private currentQuestion: any;
  private isNextActive: boolean = true;

  constructor(private testDataService: TestDataService) {}

  ngOnInit(): void {
    this.data = JSON.parse(JSON.stringify(this.testDataService.testData.kg));
    this.onNext();
  }

  private onNext(): void {
    this.initialIndex ++;
    this.isNextActive = this.initialIndex < this.data.length;
    if (this.isNextActive) {
      this.currentQuestion = this.data[this.initialIndex];
    }
  }
}
