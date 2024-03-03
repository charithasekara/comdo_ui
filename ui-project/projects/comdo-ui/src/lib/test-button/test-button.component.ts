import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-test-button',
  standalone: true,
  imports: [],
  template: `
    <button>{{ btnLabel }}</button>
  `,
  styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent {
  @Input('btnLabel') btnLabel: string = 'Run Test'; // Set default label

  constructor() { }
}
