import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  _getFriendRequests = 'http://localhost:4000/user/friendrequests';
  _addFriendUrl = 'http://localhost:4000/user/addfriend';
  _rejectFriendUrl = 'http://localhost:4000/user/rejectrequest';

  constructor(
    private http:HttpClient
  ) { }

  getFriendRequests() {
    return this.http.get<any>(this._getFriendRequests)
  }

  addFriend(username) {
    return this.http.post<any>(this._addFriendUrl, {"username":username})
  }

  rejectFriend(username) {
    return this.http.post<any>(this._rejectFriendUrl, {"username":username})
  }

}
