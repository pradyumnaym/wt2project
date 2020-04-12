import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends:any[];
  hasFriends:boolean  = false;
  constructor(
    private profileService:ProfileService
  ) { }

  ngOnInit(): void {
    this.getUserFriends()
  }

  getUserFriends() {
    this.profileService.getFriends().subscribe(
      response => {
                    this.friends = response
                    if(this.friends.length > 0) {
                      this.hasFriends = true
                    }
                    console.log(this.friends)
                  },
      error => console.log(error)
    )
  }

}
