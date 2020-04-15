import { Component, OnInit ,Input, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Game } from '../models/gamecard';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css','./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() games: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
