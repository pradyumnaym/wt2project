import { Component, OnInit } from '@angular/core';
import { Game } from '../models/gamecard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Game[] = [

    {
      id : 1 ,
      name : 'Chess',
      imgUrl :  '../../assets/chessstock.jpg' ,
      rating :  4 ,
      desc : 'A Game Of Chess lets see who has the best mindset blah blah blah......',
      src : 'http://localhost:4200/chessRequests',
      inviteFriends: true
    },
    {
      id : 2 ,
      name : 'SpaceShooter',
      imgUrl :  '../../assets/spacestock.jpg' ,
      rating :  3 ,
      desc : 'A battleship game blah blah blah......',
      src : '../../assets/Space-Shooter/space_shooter.html',
      inviteFriends: false
    },
    // {
    //   id : 3 ,
    //   name : 'Randomface',
    //   imgUrl :  '../../assets/chessstock.jpg' ,
    //   rating :  5 ,
    //   desc : 'A random face game blah blah blah......',
    //   src : '../../assets/Chess/chess.html',
    //   inviteFriends: false
    // }



  ]   ;




  constructor() { }

  ngOnInit(): void {
  }

}
