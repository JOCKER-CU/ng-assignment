import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [
  ]
})
export class EvenComponent implements OnInit {
  @Input() evennum: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
