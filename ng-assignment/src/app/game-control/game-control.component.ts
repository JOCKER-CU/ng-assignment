import { Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: [
  ]
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(()=> {
      this.intervalFired.emit(this.lastNumber + 1)
      this.lastNumber++;
      // console.log(this.lastNumber)
    },1000);
  }

  onPauseGame() {
    clearInterval(this.interval); 
  }

}
