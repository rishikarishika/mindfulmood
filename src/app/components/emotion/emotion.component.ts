import { Component } from '@angular/core';
import { Location } from '@angular/common';

// import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.css']
})
export class EmotionComponent {
  // gaugeData = [
  //   {
  //     "name": "Emotion Score",
  //     "value": 75 
  //   }
  // ];
  // colorScheme: Color = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  constructor(private location: Location) {}

  improveMentalScore() {
  
    console.log('Improve Your Mental Score button clicked');
  }

  goBack() {
    this.location.back();
  }
}