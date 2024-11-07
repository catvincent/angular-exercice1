import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayNameComponent} from './display-name/display-name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular v18 : exercice 1';
}
