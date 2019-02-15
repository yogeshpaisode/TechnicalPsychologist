import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import {TestComponent} from './test/test.component';
import TestDataService from './test/test-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [TestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
