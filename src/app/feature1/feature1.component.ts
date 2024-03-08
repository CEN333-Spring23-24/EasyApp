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
    "It seems like you're encountering an issue with property binding in Angular. To properly bind the properties inside the <app-card> component, you should remove the curly braces {{ }} from the property bindings within the parent component. The curly braces are used for interpolation in template strings but are not necessary when binding to properties."
    )
    let car2 = new car(
      "Nissan",
      "2023",
      "http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg",
      "It seems like you're encountering an issue with property binding in Angular. To properly bind the properties inside the <app-card> component, you should remove the curly braces {{ }} from the property bindings within the parent component. The curly braces are used for interpolation in template strings but are not necessary when binding to properties."
      )
    this.list.push(car1);
    this.list.push(car2);
  }
  get cars(){
    return this.list;
  }
}
