import { Component, OnInit } from '@angular/core';
import {FeedItem,Feed} from '../models/feedcards';
import { FeedsService } from '../feeds.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

 feeds1: Feed;
 feedsOfAllItems: FeedItem[];

  constructor(private feedsService: FeedsService) {}
z
  ngOnInit(): void {
    this.feedsService.getFeeds().subscribe(feeds => {
      this.feeds1 = feeds;
      this.feedsOfAllItems = this.feeds1.items;
      console.log(this.feeds1.description);
    });

  }

}
