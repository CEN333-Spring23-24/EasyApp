import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-result-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-box.component.html',
  styleUrl: './result-box.component.css'
})
export class ResultBoxComponent {
  @Input() label: string;
  @Input() value: string;
  @Input() message: string;
  @Input() boxClass: string;
  constructor(){
    this.label = ""; 
    this.value = ""; 
    this.message = "";
    this.boxClass = "regularCard";
  }
}
