import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  _userDetailsUrl = "http://localhost:4000/user/userdetails";
  _profilePicUrl = "http://localhost:4000/images/profilepic";

  constructor(
    private http:HttpClient
    ) { }

  getUserDetails(){
    return this.http.get<any>(this._userDetailsUrl)
  }

  getUserImg(user) {
    return this.http.get(this._profilePicUrl, { responseType: 'blob' })
  } 
}
