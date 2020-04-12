import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  _userDetailsUrl = "http://localhost:4000/user/userdetails";
  _profilePicUrl = "http://localhost:4000/images/profilepic";
  _getFriendList = 'http://localhost:4000/user/friendslist';
  _getprofileUrl = 'http://localhost:4000/user/profile/';
  _updateImageUrl = 'http://localhost:4000/user/updateimage';
  _updateSummaryUrl = 'http://localhost:4000/user/addsummary';
  _updateFacebookUrl = 'http://localhost:4000/user/addfacebook';
  _updateTwitterUrl = 'http://localhost:4000/user/addtwitter';


  constructor(
    private http:HttpClient
    ) { }

  getUserDetails(){
    return this.http.get<any>(this._userDetailsUrl)
  }

  getUserImg(user) {
    return this.http.get(this._profilePicUrl, { responseType: 'blob' })
  }

  getFriends(username) {
    return this.http.post<any>(this._getFriendList,{ 'username': username })
  }

  getProfile(username) {
    return this.http.get<any>(`${this._getprofileUrl}${username}`)
  }

  updateImage(img) {
    var fd = new FormData();
    fd.append("file",img);
    return this.http.post<any>(this._updateImageUrl, fd);
  }

  sendSummary(summary) {
    return this.http.post<any>(this._updateSummaryUrl, {"text":summary})
  }

  updateFacebook(link) {
    return this.http.post<any>(this._updateFacebookUrl,{"link":link})
  }

  updateTwitter(link) {
    return this.http.post<any>(this._updateTwitterUrl,{"link":link})
  }
}
