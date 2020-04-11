import { Component, OnInit ,Input, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() sadsa: MatCardModule;

  constructor() { }

  ngOnInit(): void {
  }

}
