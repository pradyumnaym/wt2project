import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Feed } from './models/feedcards';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  FeedsUrl: string = 'http://localhost:4000/api/feeds';
  constructor(private http: HttpClient) { }

  // Get Todos
  getFeeds(): Observable<Feed> {
    return this.http.get<Feed>('http://localhost:4000/api/feeds');
  }

}
