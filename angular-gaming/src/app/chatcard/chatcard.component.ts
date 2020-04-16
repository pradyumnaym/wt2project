import { Component, OnInit,Input } from '@angular/core';
import {Chat, ChatSimilarity} from '../models/chatcard';
import { UsersimilarityService } from '../usersimilarity.service';
@Component({
  selector: 'app-chatcard',
  templateUrl: './chatcard.component.html',
  styleUrls: ['./chatcard.component.css']
})
export class ChatcardComponent implements OnInit {

  @Input() chat: ChatSimilarity;
  isset: boolean = false;
  similarity: number ;

  //colourCode: number = Number(this.chat.timestamp);

constructor(private usersimilarityService: UsersimilarityService) { }

  ngOnInit(): void {
  }

  colourcode(username: string): number
  {
    return username.length % 10 + 1;
  }

  getUserSimilarity(username) {
    this.usersimilarityService.getUserSimilarity(username).subscribe(
      response => {
                    this.similarity = response;
                    this.similarity  = Number((this.similarity*100).toFixed(2));
                   // console.log(response);

                  },
      error => console.log(error)
    )
    console.log(this.similarity);
    this.isset = true;
    return Number((this.similarity*100).toFixed(2));

  }



}
