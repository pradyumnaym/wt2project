import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:any = {

  }

  constructor(
    private authenticateService:AuthenticateService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.authenticateService.registerUser(this.registerUserData).subscribe(
      user => console.log(user),
      error => console.log(error)
    )
    this.router.navigate(['/login'])
  }

  addFile(files) {
    this.registerUserData.file = files[0];
  }


}
