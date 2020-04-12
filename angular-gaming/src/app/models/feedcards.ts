export class FeedItem {
  title: string;
  description: string;
  link: string;
  url: string;
  guid: any;
  category: string;
  dc_creator: string;
  pubDate: string;
  created: any;
  media: any;

}

export class Feed {
  items: FeedItem[];
  title: string;
  description: string;
  url: string;
  image: string;
}
