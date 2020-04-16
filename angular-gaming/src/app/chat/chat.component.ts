import { Component, OnInit } from '@angular/core';
import {Chat , ChatSimilarity} from '../models/chatcard';
import { ChatService } from '../chat.service';
import { UsersimilarityService } from '../usersimilarity.service';
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
      this.sortedchat1 = this.chats1.sort((a,b) => Number(a.timestamp) - Number(b.timestamp));
      //this.sortedchats1 = this.sortedchat1;
      //.slice(Math.max(this.sortedchat1.length - 4, 0))
      //index = 1;

      for(let i = 0; i < this.sortedchat1.length; i++){

         this.getUserSimilarity(this.sortedchat1[i].username);
         this.chatobj.username = this.sortedchat1[i].username;
         this.chatobj.msg = this.sortedchat1[i].msg;
         this.chatobj.timestamp = this.sortedchat1[i].timestamp;

         let obj = Number(document.getElementById("dup").innerHTML);
        // console.log(obj);
        //console.log("see:-");
        //console.log(this.similarity);
        //this.chatsimilar.push(this.chatobj);
        console.log(2);
        this.chatsimilar.push({username:this.sortedchat1[i].username,msg:this.sortedchat1[i].msg,timestamp:this.sortedchat1[i].timestamp,similarity:obj});

        //console.log(this.chatsimilar[i]);

      }



    });


  }

  getUserSimilarity(username) {
    let obj: number;
    this.usersimilarityService.getUserSimilarity(username).subscribe(
      response => {
                    obj = response;
                    document.getElementById("dup").innerHTML = obj.toLocaleString();
                    this.update();
                    //console.log(document.getElementById("dup").innerHTML);
                   //console.log(1);
                    this.chatobj.similarity = Number((response*100).toFixed(3));
                  },
      error => console.log(error)

    );
    //this.isset = true;
    //console.log('here'+this.chatobj.similarity);
    //console.log(temp);
    //return obj;
    this.update();
    //console.log(Response.toString());
    //console.log(obj);
  }

  update(){
    console.log(1);
  }





}
