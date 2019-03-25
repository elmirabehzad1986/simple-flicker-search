import { Component, OnInit, Input } from '@angular/core';
import { FlickerDetail } from '../../models/flicker-details.model';

@Component({
  selector: 'app-flicker-search-result',
  templateUrl: './flicker-search-result.component.html',
  styleUrls: ['./flicker-search-result.component.scss']
})
export class FlickerSearchResultComponent implements OnInit {
  
  @Input() tags: string[];
  @Input() result: FlickerDetail;

  constructor() { }

  ngOnInit() {
  }

  highlightTags(description: string) {
    
    this.tags.forEach(tag=>{
      description = description.replace(tag, "<<$&>>");
    });

    return description;
    
  }

}
