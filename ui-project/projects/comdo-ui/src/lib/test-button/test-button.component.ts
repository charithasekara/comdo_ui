import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'lib-test-button',
  standalone: true,
  imports: [],
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.css'
})
export class TestButtonComponent implements OnInit{
  @Input('btnLabel') btnLabel: string= '';

  constructor() { }

  ngOnInit(): void {
  }

}
