import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username:string;
  profile:any = {}
  hasFriends:boolean = false
  hasFacebook:boolean = false
  hasTwitter:boolean = false
  hasSummary:boolean = false
  notFriend:boolean = false
  friends:any = {}

  constructor(
    private searchService:SearchService
  ) { }

  ngOnInit(): void {
  }

  searchUser() {
    document.getElementById('profile_body').style.visibility = 'hidden';
    this.username = (<HTMLInputElement>document.getElementById('username')).value
    this.updateProfileDetails(this.username)
  }

  updateProfileDetails(username) {
    this.searchService.getProfile(username).subscribe(
      user => {
        document.getElementById('profile_body').style.visibility = 'visible';
        this.profile = user
        console.log(user)
        
        if(this.profile.facebook != undefined) {
          this.hasFacebook = true    
        }

        if(this.profile.twitter != undefined) {
          this.hasTwitter = true
        }

        if(this.profile.summary != undefined) {
          document.getElementById("summary").innerHTML = this.profile.summary
        }

        if(this.profile.img == undefined) {
          document.getElementById('profile_pic').setAttribute('src',"../assets/me.jpg")
        }
        else {
          document.getElementById('profile_pic').setAttribute('src',`http://localhost:4000/images/logo/${this.profile.img}`)
        }
      }
    )
    this.getUserFriends(this.username)
  }

  getUserFriends(username) {
    this.searchService.getFriends(username).subscribe(
      response => { 
                    this.friends = response
                    console.log(response)
                    for(var i =0;i<3 && i<this.friends.length;i++) {
                      this.hasFriends = true
                      this.getProfileDetails(this.friends[i])
                    }
                  },
      error => console.log(error)
    )
  }

  getProfileDetails(username) {
    this.searchService.getProfile(username).subscribe(
      response => {
        console.log(response)
        document.getElementById(`name_${username}`).innerHTML = `${response.firstname} ${response.lastname}`
        if(response.img == undefined) {
          (<HTMLImageElement>document.getElementById(`img_${username}`)).src = "../assets/me.jpg"
        }
        else {
          (<HTMLImageElement>document.getElementById(`img_${username}`)).src = `http://localhost:4000/images/logo/${response.img}`
        }},
        error => (<HTMLImageElement>document.getElementById(`img_${username}`)).src = "../assets/me.jpg"
        )
    }

  sendFriendRequest() {
    this.searchService.sendFriendRequest(this.username).subscribe(
      response => {
        console.log("request sent")
      },
      error => console.log(error)
    ) 
  }
}
