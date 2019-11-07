import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer;
  prevNumber = 0;
  running = false;

  @Output('newNumber')
  newnumberEmitter: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onStart() {
    this.timer = setInterval(() => {
      console.log(++this.prevNumber);
      this.newnumberEmitter.emit(this.prevNumber);
    }, 1000);
    this.running = !this.running;
  }

  onStop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.running = !this.running;
    }
  }
}
