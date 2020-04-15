import { Component, OnInit } from '@angular/core';
import {Chat} from '../models/chatcard';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

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

  sortedchat1: any;
  sortedchats1: any;

sortedchat: any = this.chats.sort((a,b) => Number(a.timestamp) - Number(b.timestamp));
sortedchats = this.sortedchat.slice(Math.max(this.sortedchat.length - 4, 0));
chats1: any;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {

    this.chatService.getChats().subscribe(chats => {
      this.chats1 = chats;
      this.sortedchat1 = this.chats1.sort((a,b) => Number(a.timestamp) - Number(b.timestamp));
      this.sortedchats1 = this.sortedchat1.slice(Math.max(this.sortedchat1.length - 4, 0));

    });


  }





}
