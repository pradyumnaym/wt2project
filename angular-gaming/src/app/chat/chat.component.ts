import { Component, OnInit } from '@angular/core';
import {Chat , ChatSimilarity} from '../models/chatcard';
import { ChatService } from '../chat.service';
import { UsersimilarityService } from '../usersimilarity.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  similarity:number;
  chats: Chat[] = [

    {
        username: 'tester1',
        timestamp: '0',
        msg: 'this is a msg 1'
    },
    {
      username: 'tester2',
      timestamp: '10',
      msg: 'this is a msg 2'
  },
  {
    username: 'tester3',
    timestamp: '2',
    msg: 'this is a msg 3'
},
{
  username: 'tester4',
  timestamp: '1',
  msg: 'this is a msg 4'
},
{
  username: 'tester5',
  timestamp: '20',
  msg: 'this is a msg 5'
}

  ];

  chatsimilar: ChatSimilarity[] = [] ;
  chatobj: ChatSimilarity = {username:"1",timestamp:"1",msg:"hello",similarity:0};

  sortedchat1: any;
  sortedchats1: any;

  sortedchat: any = this.chats.sort((a,b) => Number(a.timestamp) - Number(b.timestamp));
  sortedchats = this.sortedchat.slice(Math.max(this.sortedchat.length - 4, 0));
  chats1: any;

  constructor(private chatService: ChatService,private usersimilarityService: UsersimilarityService) { }

  ngOnInit(): void {
    this.chatService.getChats().subscribe(chats => {
      this.chats1 = chats;
      this.sortedchat1 = this.chats1.sort((a,b) => Number(a.timestamp.replace(",","")) - Number(b.timestamp.replace(",","")));

      for(let i = 0; i < this.sortedchat1.length; i++){
        var chatO = {username:"1",timestamp:"1",msg:"hello",similarity:0}
        chatO.username = this.sortedchat1[i].username;
        chatO.msg = this.sortedchat1[i].msg;
        chatO.timestamp = this.sortedchat1[i].timestamp;
        this.getUserSimilarity(this.sortedchat1[i].username, chatO);
        this.chatsimilar.push(chatO);
      }
    })
    interval(5000).subscribe(
    x => { 
      this.chatsimilar = []
      this.chatService.getChats().subscribe(chats => {
        this.chats1 = chats;
        this.sortedchat1 = this.chats1.sort((a,b) =>  Number(a.timestamp.replace(",","")) - Number(b.timestamp.replace(",","")));
        console.log("got messages")

        for(let i = 0; i < this.sortedchat1.length; i++){
          var chatO = {username:"1",timestamp:"1",msg:"hello",similarity:0}
          chatO.username = this.sortedchat1[i].username;
          chatO.msg = this.sortedchat1[i].msg;
          chatO.timestamp = this.sortedchat1[i].timestamp;
          this.getUserSimilarity(this.sortedchat1[i].username, chatO);
          this.chatsimilar.push(chatO);

        }
      })
    });
  }

  getUserSimilarity(username,chatO) {
    this.usersimilarityService.getUserSimilarity(username).subscribe(
      response => {
                    chatO.similarity = (response*100).toFixed(2)
                  },
      error => console.log(error)
    )
  }
}
