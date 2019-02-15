import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import {TestComponent} from './test/test.component';
import TestDataService from './test/test-data.service';
import { ChartsComponent } from './charts/charts.component';
import ChartsConfigService from './charts/charts.config.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    HighchartsChartModule
  ],
  providers: [TestDataService, ChartsConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
