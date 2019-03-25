import { Component, OnInit,Output,EventEmitter,ElementRef } from '@angular/core';
import { FlickerApiService } from '../../services/flicker-api.service';
import { FlickerDetail } from '../../models/flicker-details.model';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-flicker-search-tool',
  templateUrl: './flicker-search-tool.component.html',
  styleUrls: ['./flicker-search-tool.component.css']
})
export class FlickerSearchToolComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() find = new EventEmitter<FlickerDetail[]>();
  constructor(private flickerApi: FlickerApiService, private el:ElementRef){
    
  }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((element:any) => element.target.value),
      filter(text => text.length > 1),
      debounceTime(300),
      tap(() => this.loading.emit(true)),
      map((query:string) => this.flickerApi.search(query)),
      switchAll())
      .subscribe({
        next: (result) => {
          console.log("next", result);
          this.loading.emit(false);
          this.find.emit(result);
        },
        error: err => {
          console.log("error", err);
          this.loading.emit(false);
        },
        complete: () => {
          console.log("complete");
          this.loading.emit(false);
        }
      });
  }

}
