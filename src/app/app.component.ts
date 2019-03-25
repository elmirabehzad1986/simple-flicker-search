import { Component } from '@angular/core';
import { FlickerDetail, FlickerSearchResult } from './models/flicker-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  results:FlickerDetail[];
  tags: string[];
  loading:boolean;
  error: string = '';

  updateResults(flickerSearchResult: FlickerSearchResult):void{
    this.results = flickerSearchResult.searchItems;
    this.tags = flickerSearchResult.tags;

    if(this.results.length == 0){
      this.error = 'flicker not found, try again ...';
      this.results = null;
      this.tags = null;
      
    } else {
      this.error = '';
    }
  }
}
