import {Component, OnInit} from '@angular/core';
import AppStatic from './app.static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private results: any[] = null;

  ngOnInit() {
    AppStatic.resultSubkect.subscribe((result: any[]) => {
      this.results = result;
    });
  }
}
