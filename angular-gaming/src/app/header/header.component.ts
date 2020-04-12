import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = true
  constructor(
    private authenticateService:AuthenticateService
  ) { }

  ngOnInit(): void {
    this.CheckloggedIn()
  }

  CheckloggedIn() {
    this.isLoggedIn = this.authenticateService.loggedIn()
  }
}
