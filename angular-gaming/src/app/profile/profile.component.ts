import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css','./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  hasFriends:boolean = false
  hasFacebook:boolean = false
  hasTwitter:boolean = false
  hasSummary:boolean = false
  userProfile:boolean = true
  profile:any = {}
  profilePic:any = {}
  friends:any[]
  requests:any = {}
  index:any
  username:any

  constructor(
    private profileService:ProfileService,
    private sanitizer: DomSanitizer,
    private router:Router
  ) { }

  ngOnInit():void {
    this.getUserProfilePage();
  }

  getUserProfilePage() {
    this.profileService.getUserDetails().subscribe(
      user => {
        this.profile = user
        this.username = user.username
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

        this.getUserFriends(user.username)

        if(this.profile.img == undefined) {
          document.getElementById('profile_pic').setAttribute('src',"../assets/me.jpg")
        }
        else {
          document.getElementById('profile_pic').setAttribute('src',`http://localhost:4000/images/logo/${this.profile.img}`)
        }
      }
    )
  }

  getUserFriends(username) {
    this.profileService.getFriends(username).subscribe(
      response => {
                    this.friends = response
                    console.log(response)
                    for(var i=0;i<3 && i<this.friends.length;i++) {
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

  Search(name) {
    this.router.navigate(['/search',name])
  }
}
