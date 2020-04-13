import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  _getprofileUrl = 'http://localhost:4000/user/profile/';
  _getFriendList = 'http://localhost:4000/user/friendslist';
  _sendFriendRequestUrl = "http://localhost:4000/user/sendrequest";
  username:string;

  constructor(
    private http:HttpClient
  ) { }

  getProfile(username) {
    return this.http.get<any>(`${this._getprofileUrl}${username}`)
  }

  getFriends(username) {
    return this.http.post<any>(this._getFriendList,{ 'username': username })
  }

  sendFriendRequest(username) {
    return this.http.post<any>(this._sendFriendRequestUrl, {'username': username})
  }
}
