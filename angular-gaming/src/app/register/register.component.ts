import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../services/authenticate.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:any = {

  }

  constructor(
    private authenticateService:AuthenticateService
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.authenticateService.registerUser(this.registerUserData).subscribe(
      user => {},
      error => console.log(error)
    )

  }

  addFile(files) {
    this.registerUserData.file = files[0];
  }


}
