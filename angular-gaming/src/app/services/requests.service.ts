import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  _getFriendRequests = 'http://localhost:4000/user/friendrequests';

  constructor(
    private http:HttpClient
  ) { }

  getFriendRequests() {
    return this.http.get<any>(this._getFriendRequests)
  }
}
