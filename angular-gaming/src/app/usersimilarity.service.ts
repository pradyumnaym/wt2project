import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chat } from './models/chatcard';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}


@Injectable({
  providedIn: 'root'
})
export class UsersimilarityService {


  similarityUrl: string = 'http://localhost:4000/user/usersimilarity';
  constructor(private http: HttpClient) { }

  getUserSimilarity(username) {
    return this.http.post<any>(this.similarityUrl,{ 'username': username })
  }


}
