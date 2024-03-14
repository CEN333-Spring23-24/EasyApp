import { Component } from '@angular/core';
import { ResultBoxComponent } from '../result-box/result-box.component';
@Component({
  selector: 'app-one-column-form',
  standalone: true,
  imports: [ResultBoxComponent],
  templateUrl: './one-column-form.component.html',
  styleUrl: './one-column-form.component.css'
})
export class OneColumnFormComponent {

}
