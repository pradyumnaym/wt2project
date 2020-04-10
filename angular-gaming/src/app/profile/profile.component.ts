import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any = {}
  profilePic:any = {}


  constructor(
    private profileService:ProfileService
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
  }
}
