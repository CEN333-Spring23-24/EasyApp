import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  static counter = 0;
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() inputValue: any;
  @Output() inputValueChange: EventEmitter<any> = new EventEmitter<any>();
  id: string;

  constructor(){
    this.label = ""; 
    this.placeholder = ""; 
    this.inputValue = 0;
    this.type = 'text';

    InputComponent.counter++;
    this.id = `appInput${InputComponent.counter}`;
  }

  onInputChange(value: any) {
    this.inputValueChange.emit(value);
  }
}
