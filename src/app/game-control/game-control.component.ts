import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 0;
  interval;
  @Output() startGameEvent = new EventEmitter<number>();
  @Output() endGameEvent = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.startGameEvent.emit(this.counter++);
    }, 1000);
  }

  onGameEnd() {
    clearInterval(this.interval);
  }
}
