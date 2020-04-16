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
      src : 'http://localhost:4200/chessRequests'
    },
    {
      id : 2 ,
      name : 'SpaceShooter',
      imgUrl :  '../../assets/space_bg.jpg' ,
      rating :  4 ,
      desc : 'Space Shooter game puts you at the forefront of a battle with space intruders. You will take control of the lone spaceship and protect galaxy from alien swarms.',
      src : '../../assets/Space-Shooter/space_shooter.html'
    },
    {
      id : 3 ,
      name : 'Breakout',
      imgUrl :  '../../assets/breakout_bg.png' ,
      rating :  5 ,
      desc : 'Step out and play the classic breakout game which blew up and has inspired countless clones since inception.',
      src : '../../assets/Breakout_game/index.html'
    }



  ]   ;




  constructor() {  }

  ngOnInit(): void {
  }

}
