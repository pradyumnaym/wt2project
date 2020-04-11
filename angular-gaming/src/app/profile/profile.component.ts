import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any = {}
  profilePic:any = {}
  friends:any[]
  requests:any = {}
  username:string = "abeability"
  friend:string = "abeability"
  friendProfiles:any = new Array()


  constructor(
    private profileService:ProfileService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit():void {
    
    this.profileService.getUserDetails().subscribe(
      user => {
        this.profile = user
        if(this.profile.img == undefined) {
          document.getElementById('profile_pic').setAttribute('src',"../assets/me.jpg")
        }
        else {
          this.profileService.getUserImg(user).subscribe(
            response => {
                document.getElementById('profile_pic').setAttribute('src',URL.createObjectURL(response)) 
            },
            error => console.log(error)
          );
        }
      }
    )

    this.profileService.getFriendRequests().subscribe(
      response => {this.requests = response
        //console.log("got requests")
      },
      error => console.log(error)
    )


    this.profileService.getFriends().subscribe(
      response => {
                    this.friends = response
                    for(var i=0;i<3 && i<this.friends.length;i++) {
                      this.getProfileDetails(this.friends[i])
                    }
                  },
      error => console.log(error)
    )

    
    
  }

  sendFriendRequest() {
    this.profileService.sendFriendRequest(this.username).subscribe(
      response => {
        //console.log("request sent")
      },
      error => console.log(error)
    ) 
  }

  addFriendRequest() {
    this.profileService.addFriend(this.friend).subscribe(
      response => console.log("Friend Added"),
      error => console.log(error)
    )
  }


  getProfileDetails(username) {
    //console.log(this.friends)
    this.profileService.getProfile(username).subscribe(
      response => {
        
        if(response.img == undefined) {
          response.imgSrc = "../assets/me.jpg"
        }
        else {
          this.profileService.getUserImg(username).subscribe(
            img => {
                response.imgSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(img))
            },
            error => console.log(error)
          )
        }
        this.friendProfiles.push(response)
      },
      error => console.log(error)
    )
  }
}
