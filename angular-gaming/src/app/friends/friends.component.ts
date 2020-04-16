import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css','./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends:any[];
  hasFriends:boolean  = false;
  username:string
  constructor(
    private profileService:ProfileService
  ) { }

  updateUserName() {
    this.profileService.getUserDetails().subscribe(
      user => {
        this.getUserFriends(user.username)
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void {
    this.updateUserName()
  }

  getUserFriends(username) {
    this.profileService.getFriends(username).subscribe(
      response => {
                    this.friends = response
                    for(var i=0;i<this.friends.length;i++) {
                      this.hasFriends = true
                      this.getProfileDetails(this.friends[i])
                    }
                  },
      error => console.log(error)
    )
  }

  getProfileDetails(username) {
    this.profileService.getProfile(username).subscribe(
      response => {
        document.getElementById(`${username}_name`).innerHTML = `${response.username}`
        if(response.img == undefined) {
          (<HTMLImageElement>document.getElementById(`${username}_img`)).src = "../assets/me.jpg"
        }
        else {
          (<HTMLImageElement>document.getElementById(`${username}_img`)).src = `http://localhost:4000/images/logo/${response.img}`
        }},
        error => (<HTMLImageElement>document.getElementById(`${username}_img`)).src = "../assets/me.jpg"
        )
  }

}
