import { Component, OnInit,Input } from '@angular/core';
import {Chat} from '../models/chatcard';
@Component({
  selector: 'app-chatcard',
  templateUrl: './chatcard.component.html',
  styleUrls: ['./chatcard.component.css']
})
export class ChatcardComponent implements OnInit {

  @Input() chat: Chat;

  //colourCode: number = Number(this.chat.timestamp);

constructor() { }

  ngOnInit(): void {
  }

  colourcode(username: string): number
  {
    return username.length % 10 + 1;
  }


}