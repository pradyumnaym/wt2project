import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hasFriends:boolean = false
  hasFacebook:boolean = false
  hasTwitter:boolean = false
  hasSummary:boolean = false
  profile:any = {}
  profilePic:any = {}
  friends:any[]
  requests:any = {}
  friendProfiles:any = new Array()


  constructor(
    private profileService:ProfileService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit():void {
    this.getUserProfilePage();
  }

  getUserProfilePage() {
    this.profileService.getUserDetails().subscribe(
      user => {
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
          this.profileService.getUserImg(user).subscribe(
            response => {
                document.getElementById('profile_pic').setAttribute('src',URL.createObjectURL(response)) 
            },
            error => console.log(error)
          );
        }
      }
    )
    this.getUserFriends()
  }

  getUserFriends() {
    this.profileService.getFriends().subscribe(
      response => {
                    this.friends = response
                    for(var i=0;i<3 && i<this.friends.length;i++) {
                      this.hasFriends = true
                      this.getProfileDetails(this.friends[i])
                    }
                  },
      error => console.log(error)
    )
  }

  // sendFriendRequest() {
  //   this.profileService.sendFriendRequest(this.username).subscribe(
  //     response => {
  //       //console.log("request sent")
  //     },
  //     error => console.log(error)
  //   ) 
  // }

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

  openfileDialog() {
    document.getElementById("imageUpload").click();
  }

  editProfile() {
    document.getElementById('summary').contentEditable="true";
  }

  updateImage(files) {
    this.profileService.updateImage(files[0]).subscribe(
      response => {
        this.getUserProfilePage()
      },
      error => console.log(error)
    )
  };

  updateSummary() {
    var new_summary = document.getElementById("summary").innerHTML;
    this.profileService.sendSummary(new_summary).subscribe(
      response => {
        console.log("summary updated")
      }
    )
  }

  updateFacebook() {
    var link = (<HTMLInputElement>document.getElementById("fbLink")).value
    this.profileService.updateFacebook(link).subscribe(
      response => {
        this.hasFacebook = true
        this.getUserProfilePage()
      },
      error => console.log(error)
    )
  }

  updateTwitter() {
    var link = (<HTMLInputElement>document.getElementById("twtrLink")).value
    this.profileService.updateTwitter(link).subscribe(
      response => {
        this.hasTwitter = true
        this.getUserProfilePage()
      },
      error => console.log(error)
    )
  }

  showButtons() {
    let allButtons = document.getElementsByClassName("hidden") as HTMLCollectionOf<HTMLElement>;
    for(var i = 0; i < allButtons.length; i++) {
      allButtons[i].style.display = "inline-block";
    }
  }

  hideButtons() {
    let allButtons = document.getElementsByClassName("hidden") as HTMLCollectionOf<HTMLElement>;
    for(var i = 0; i < allButtons.length; i++) {
      allButtons[i].style.display = "none";
    }
  }
}
