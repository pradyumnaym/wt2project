import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service'
import {ChessService} from '../services/chess.service'
import { interval } from 'rxjs';
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
  friendObjects = []
  username = ''
  noRequests:boolean = true
  noFriends:boolean = true

  constructor(
    private profileService:ProfileService,
    private chessService:ChessService,
    
  ) { }

  ngOnInit(): void {
    this.getRequests()
    this.getFriends()
    interval(5000).subscribe(
      x => {
        this.requests = []
        this.requestObjects = []
        this.getRequests()
      })
    interval(10000).subscribe(
      x => {
        this.friendObjects = []
        this.getFriends()
      }
    )
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
                for(var i = 0;i < response.length;i++) {
                  this.friendObjects.push({'name': response[i], 'hasRequest': false})
                  for(var j = 0;j < this.requestObjects.length;j++) {
                    if(this.requestObjects[j].to == response[i] || this.requestObjects[j].from == response[i]) {
                      this.friendObjects[i].hasRequest = true
                    }
                  }
                }
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
