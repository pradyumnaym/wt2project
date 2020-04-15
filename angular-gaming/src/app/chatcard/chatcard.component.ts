import { Component, OnInit,Input } from '@angular/core';
import {Chat} from '../models/chatcard';
import { UsersimilarityService } from '../usersimilarity.service';
@Component({
  selector: 'app-chatcard',
  templateUrl: './chatcard.component.html',
  styleUrls: ['./chatcard.component.css']
})
export class ChatcardComponent implements OnInit {

  @Input() chat: Chat;

  similarity: any = 0.5;

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
                    console.log(response);

                  },
      error => console.log(error)
    )

    return this.similarity;

  }



}
