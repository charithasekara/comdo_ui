import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestButtonComponent } from 'comdo-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui-project';
}
