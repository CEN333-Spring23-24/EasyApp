import { Routes } from '@angular/router';
import { Feature1Component } from './feature1/feature1.component';
import { CalculationComponent } from './calculation/calculation.component';

export const routes: Routes = [
    {path: 'feature1', component:Feature1Component},
    {path: 'feature2', component:CalculationComponent}
];
