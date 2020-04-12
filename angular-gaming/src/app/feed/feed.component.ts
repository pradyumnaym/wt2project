import { Component, OnInit ,Input} from '@angular/core';
import {FeedItem,Feed} from '../models/feedcards';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() feed: FeedItem;


  constructor() { }

  ngOnInit(): void {
  }

}
