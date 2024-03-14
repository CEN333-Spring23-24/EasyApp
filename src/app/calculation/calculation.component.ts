import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';
import { OneColumnFormComponent } from '../one-column-form/one-column-form.component';
import { ResultBoxComponent } from '../result-box/result-box.component';
@Component({
  selector: 'app-calculation',
  standalone: true,
  imports: [ContainerComponent, CardComponent, CommonModule, InputComponent, FormsModule, OneColumnFormComponent, ResultBoxComponent],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {
  input1: number;
  input2: number;
  input3: number;
  input4: number;
  outputA: number; 
  outputB: number; 
  messageA: string;
  messageB: string;

  constructor(){
    this.input1 = 0;
    this.input2 = 0;
    this.input3 = 0;
    this.input4 = 0;
    this.outputA = 0; 
    this.outputB = 0; 
    this.messageA = "";
    this.messageB = "";
  }
  
  calc_auto(){
    this.outputA = +this.input1 + +this.input2;
    console.log(this.outputA);
  }
  calc_event(){
    this.outputB = this.input3 * this.input4;
  }
  
  getClassFromValueA(value: number){
    let cssClass
    if(value <0 || value >100)
    {
      cssClass = "error";
      this.messageA = "The value is not within the allowed range";
    }
    else if (value>=0 && value<25){
      cssClass = "normal";
      this.messageA = "The value is less than 25";
    }
    else if (value>=25 && value<=75){
      cssClass = "warning";
      this.messageA = "The value is between 25 and 75";
    }
    else{
      cssClass = "success";
      this.messageA = "The value is more than 75";
    }
    return cssClass;
  }

  getClassFromValueB(value: number){
    let cssClass
    if(value <0 || value >100)
    {
      cssClass = "error";
      this.messageB = "The value is not within the allowed range";
    }
    else if (value>=0 && value<25){
      cssClass = "normal";
      this.messageB = "The value is less than 25";
    }
    else if (value>=25 && value<=75){
      cssClass = "warning";
      this.messageB = "The value is between 25 and 75";
    }
    else{
      cssClass = "success";
      this.messageB = "The value is more than 75";
    }
    return cssClass;
  }
}
