import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() header: string;
  @Input() subheader: string;
  @Input() image: string;

  constructor(){
    this.header = ""; 
    this.subheader = ""; 
    this.image = ""; 
  }
}
