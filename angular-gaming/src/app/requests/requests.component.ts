import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests = {}
  constructor(
    private requestsService:RequestsService
  ) { }

  ngOnInit(): void {
    this.getRequests()
  }

  getRequests() {
    this.requestsService.getFriendRequests().subscribe(
      response => {this.requests = response
        console.log(response)
      },
      error => console.log(error)
    )
  }


}
