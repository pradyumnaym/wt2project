import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service'
import {ChessService} from '../services/chess.service'
import { VirtualTimeScheduler, of } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-chess-requests',
  templateUrl: './chess-requests.component.html',
  styleUrls: ['./chess-requests.component.css']
})
export class ChessRequestsComponent implements OnInit {
  requests = []
  friends = []
  requestObjects = []
  username = ''
  noRequests:boolean = true
  noFriends:boolean = true

  constructor(
    private profileService:ProfileService,
    private chessService:ChessService
  ) { }

  ngOnInit(): void {
    this.getRequests()
    this.getFriends()
  }

  getRequests() {
    this.chessService.getRequests().subscribe( 
      response => {
        this.requests = response
        if(response != null) {
          this.noRequests = false
          for(var i = 0;i < response.length;i++) {
            this.chessService.getRequestDetails(response[i]).subscribe(
              response => {
                this.requestObjects.push(response)
              }
            )
          }
        }
      }
    )
  }

  acceptRequest(id) {
    this.chessService.acceptRequest(id).subscribe(
      response => console.log(response)
    )
  }

  sendRequest(name) {
    this.chessService.sendRequest(name).subscribe(
      response => console.log(response)
    )
  }

  getFriends() {
    this.profileService.getUserDetails().subscribe(
      user => {
        this.username = user.username
        this.profileService.getFriends(user.username).subscribe( 
          response => {
              console.log(response)
              if(response.length > 0) {
                this.noFriends = false
                this.friends = response
                console.log(this)
              }  
          }
        )
      }
    )
  }

  inviteShow() {
    document.getElementById('inviteFriends').classList.toggle("show")
  }

  requestShow() {
    document.getElementById('requests').classList.toggle("show")
  }

}
