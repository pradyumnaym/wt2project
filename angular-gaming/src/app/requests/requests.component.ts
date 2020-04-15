import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css','../profile/profile.component.scss']
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
        console.log(response)
        if(this.requests.length > 0) {
          this.hasRequests = true
        }
        console.log(this.requests)
      },
      error => console.log(error)
    )
  }

  addFriendRequest(index) {
    document.getElementById(`request${index}`).style.display = 'none'
    this.requestsService.addFriend(this.requests[index]).subscribe(
      response => console.log("Friend Added"),
      error => console.log(error)
    )
  }

  rejectFriendRequest(index) {
    document.getElementById(`request${index}`).style.display = 'none'
    this.requestsService.rejectFriend(this.requests[index]).subscribe(
      response => console.log("Friend Removed"),
      error => console.log(error)
    )
  }
}
