import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { car } from './car';

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [ContainerComponent,CardComponent, CommonModule],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.css'
})
export class Feature1Component {
  private list: car[]; 

  constructor(){
    this.list = []; 
    let car1 = new car(
    "Toyota",
    "2013",
    "http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg",
    "good"
    )
    let car2 = new car(
      "Nissan",
      "2023",
      "http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg",
      "bad"
      )
    this.list.push(car1);
    this.list.push(car2);
  }
  get cars(){
    return this.list;
  }
}
