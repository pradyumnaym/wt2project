import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthenticateService} from '../services/authenticate.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router,
    private authenticateService:AuthenticateService
  ) {

  }

  canActivate(): boolean {
    if( this.authenticateService.loggedIn() ) {
      return true
    }
    else {
      this.router.navigate((['/login']))
      return false
    }
  }
}