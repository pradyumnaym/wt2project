import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private _registerUrl = "http://localhost:4000/user/register";
  private _loginUrl = "http://localhost:4000/user/login";

  constructor(private http:HttpClient) { }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  registerUser(user) {
    var fd = new FormData();
    console.log(user);
    fd.append("username", user.username);
    fd.append("password", user.password);
    fd.append("firstname", user.firstname);
    fd.append("lastname", user.lastname);
    fd.append("file", user.file);
    fd.append("email",user.email);
    return this.http.post<any>(this._registerUrl, fd);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token")
    return false;
  }


}
