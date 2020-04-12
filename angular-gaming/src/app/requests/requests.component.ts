import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  hasRequests:boolean = false
  requests:any[]
  constructor(
    private requestsService:RequestsService
  ) { }

  ngOnInit(): void {
    this.getRequests()
  }

  getRequests() {
    this.requestsService.getFriendRequests().subscribe(
      response => {this.requests = response
        this.requests = ["abeability"]
        if(this.requests.length > 0) {
          this.hasRequests = true
        }
        console.log(this.requests)
      },
      error => console.log(error)
    )
  }

  addFriendRequest(index) {
    this.requestsService.addFriend(this.requests[index]).subscribe(
      response => console.log("Friend Added"),
      error => console.log(error)
    )
  }


}
