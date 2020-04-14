// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css']
// })
// export class CarouselComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  imagesUrl = '../../assets/gamesimages/';
  currentIndex = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '1234567812345678'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: this.imagesUrl+`${num}`+'.jpg',
      title: `${num}`
    };
  });

  constructor() { }

  click(i) {
    if(i%2==1)
    window.open('http://localhost:4200/chessRequests');
    else
    window.open('http://localhost:4200/../assets/Space-Shooter/space_shooter.html');
  }

}
