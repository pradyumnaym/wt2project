import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean = true
  constructor(
    private authenticateService:AuthenticateService
  ) { }

  ngOnInit(): void {
    this.CheckloggedIn()
  }

  CheckloggedIn() {
    this.isLogged = this.authenticateService.loggedIn()
  }

  logout() {
    this.isLogged = this.authenticateService.logout()
  }
}
