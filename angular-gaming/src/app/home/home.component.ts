import { Component, OnInit, Input} from '@angular/core';
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
      desc : 'Chess is one of the oldest strategy games in the world.Chess is an excellent board logic game that develops such skills as tactics, strategy and visual memory.',
      src : 'http://localhost:4200/chessRequests',
      inviteFriends: true
    },
    {
      id : 2 ,
      name : 'SpaceShooter',
      imgUrl :  '../../assets/spacestock.jpg' ,
      rating :  3 ,
      desc : 'Space Shooter game puts you at the forefront of a battle with space intruders. You will take control of the lone spaceship and protect galaxy from alien swarms. In this space game, you will be faced an increasingly large number of enemies and deal with many epic bosses in space war.',
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




  constructor() {  }

  ngOnInit(): void {
  }

}
