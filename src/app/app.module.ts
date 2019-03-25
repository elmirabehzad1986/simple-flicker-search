import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlickerSearchToolComponent } from './components/flicker-search-tool/flicker-search-tool.component';
import { FlickerSearchResultComponent } from './components/flicker-search-result/flicker-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FlickerSearchToolComponent,
    FlickerSearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
