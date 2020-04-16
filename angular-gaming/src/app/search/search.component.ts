import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service'
import {ProfileService} from '../services/profile.service'
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css','./search.component.scss','../profile/profile.component.scss']
})
export class SearchComponent implements OnInit {
  actualUser:string
  username:string;
  profile:any = {}
  hasFriends:boolean = false
  hasFacebook:boolean = false
  hasTwitter:boolean = false
  hasSummary:boolean = false
  notFriend:boolean = true
  friends:any = {}

  constructor(
    private searchService:SearchService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getUserProfilePage()
    this.activatedRoute.params.subscribe(
      routeParams => {
        let name = routeParams.username
        this.searchUser(name)
      })
  }

  getUserProfilePage() {
    this.profileService.getUserDetails().subscribe(
      user => {
        this.actualUser = user.username
      }
    )
  }
  getUsername() {
    document.getElementById('profile_body').style.visibility = 'hidden';
    this.username = (<HTMLInputElement>document.getElementById('username')).value
    this.router.navigate(['search',this.username])
  }

  searchUser(name) {
    this.updateProfileDetails(name)
  }

  updateProfileDetails(username) {
    this.searchService.getProfile(username).subscribe(
      user => {
        document.getElementById('profile_body').style.visibility = 'visible';
        this.profile = user
        console.log(user.username)
        this.getUserFriends(username)

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
  }

  getUserFriends(username) {
    this.searchService.getFriends(username).subscribe(
      response => {
                    this.friends = response
                    this.hasFriends = true
                    for(var i =0;i<3 && i<this.friends.length;i++) {
                      console.log(this.actualUser)
                      console.log(this.friends)
                      if(this.friends[i] == this.actualUser) {
                        this.notFriend = false
                      }
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

  sendFriendRequest(name) {
    this.searchService.sendFriendRequest(name).subscribe(
      response => {
        console.log("request sent")
      },
      error => console.log(error)
    )
  }

  Search(friend) {
    this.searchUser(friend)
  }
}
