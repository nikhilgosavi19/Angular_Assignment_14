import { Component } from '@angular/core';
import { CustomStyleDirective } from './custom-style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CustomStyleDirective]
})
export class AppComponent {}
