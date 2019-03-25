import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import {FlickerDetail} from '../models/flicker-details.model';

const FLICKER_API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne/';


@Injectable({
  providedIn: 'root'
})
export class FlickerApiService {

  constructor(private http:HttpClient) { }

  search(query:string):Observable<FlickerDetail[]>{
    const params: string = [
      `tags=${query}`,
      `tagmode=All`,
      `format=json` 
    ].join('&');

    const queryUrl = `${FLICKER_API_URL}?${params}`;

    return  this.http.jsonp(queryUrl, 'jsoncallback').pipe(map(Response =>{
      return Response['items'].map(item =>{
      return new FlickerDetail({
        imageUrl : item.link,
        author : item.author,
        tags : item.tags,
        thumbnailUrl : item.media.m  
      });
    });
    }));
    }
}
