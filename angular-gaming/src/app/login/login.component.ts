import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:any = {
      user: {}
  }
  constructor(
    private authenticateService:AuthenticateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.authenticateService.loginUser(this.loginUserData).subscribe(
      response => {
        localStorage.setItem("token",response.token)
        this.router.navigateByUrl('/home')
      }
    )
  }
}
