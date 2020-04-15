import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chatsend',
  templateUrl: './chatsend.component.html',
  styleUrls: ['./chatsend.component.css','./chatsend.component.scss']
})
export class ChatsendComponent implements OnInit {

  msg: string;
  timestamp: string = '0';

  constructor(private chatsendService: ChatService, private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
  }

  postmsg() {
    this.timestamp = Date.now().toLocaleString();
    console.log(this.timestamp,this.msg);

    this.chatsendService.PutChat(this.timestamp, this.msg).subscribe(
      error => console.log(error)
    )
  }


}
