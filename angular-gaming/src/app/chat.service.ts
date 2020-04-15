import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
export class ChatService {



  ChatsUrl: string = 'http://localhost:4000/chat/msg';
  constructor(private http: HttpClient) { }

  // Get Chats
  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.ChatsUrl);
  }




}
