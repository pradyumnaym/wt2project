import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:boolean = true;
  constructor(
    private authenticateService:AuthenticateService,
    private router:Router
  ) { 
    
  }

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
