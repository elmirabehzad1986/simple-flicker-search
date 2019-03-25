import { Component, OnInit, Input } from '@angular/core';
import { FlickerDetail } from '../../models/flicker-details.model';

@Component({
  selector: 'app-flicker-search-result',
  templateUrl: './flicker-search-result.component.html',
  styleUrls: ['./flicker-search-result.component.css']
})
export class FlickerSearchResultComponent implements OnInit {
  @Input() result: FlickerDetail;
  constructor() { }

  ngOnInit() {
  }

}
