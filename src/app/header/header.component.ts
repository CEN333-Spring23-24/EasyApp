import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string
  private featureslist: string[]; 
  constructor(){
    this.title = "";
    this.featureslist = [];
  }
  @Input()
  set features(value: string[]) {
      this.featureslist = value; 
  }
  get features(): string[]{
    return this.featureslist;
  }
  feature2path(feature: string){
    return feature.replace(/\s+/g, '').toLowerCase();
  }
}