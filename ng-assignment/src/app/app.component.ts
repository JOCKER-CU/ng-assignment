import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  evenNumberAry: number[] = [];
  oddNumberAry: number[] = [];

  onintervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0){
      this.evenNumberAry.push(firedNumber);
    } else {
      this.oddNumberAry.push(firedNumber);
    }
  }
}
