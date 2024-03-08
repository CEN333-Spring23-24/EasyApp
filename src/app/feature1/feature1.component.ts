import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.css'
})
export class Feature1Component {

}
