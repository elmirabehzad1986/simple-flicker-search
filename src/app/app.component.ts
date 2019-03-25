import { Component } from '@angular/core';
import { FlickerDetail } from './models/flicker-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results:FlickerDetail[];
  loading:boolean;
  message: string = '';

  updateResults(flickerDetails:FlickerDetail[]):void{
    this.results = flickerDetails;
    if(this.results.length == 0){
      this.message = 'flicker not found, try again ...';
    }
    else{
      this.message = 'flickers ...';
    }
  }
}
