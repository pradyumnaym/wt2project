import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChessService {

  _acceptRequestUrl = "http://localhost:4000/api/acceptrequest";
  _sendRequestUrl = "http://localhost:4000/api/sendrequest";
  _RequestUrl =  "http://localhost:4000/user/gamerequests"
  _getRequestDetails = "http://localhost:4000/request/"
  
  constructor(
    private http: HttpClient
  ) { }

  acceptRequest(id) {
    console.log("id: "+ id)
    return this.http.post<any>(this._acceptRequestUrl, {"reqid": id})
  }

  sendRequest(username) {
    return this.http.post<any>(this._sendRequestUrl, {"username": username})
  }

  getRequests() {
    return this.http.get<any>(this._RequestUrl)
  }

  clearRequests() {
    return this.http.delete<any>(this._RequestUrl)
  }

  getRequestDetails(id) {
    return this.http.get<any>(`${this._getRequestDetails}${id}`)
  } 

}
