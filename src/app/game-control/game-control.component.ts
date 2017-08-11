import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  currentNumber = 1;
  interval;
  @Output() sendIncrementedNumber = new EventEmitter<number>();


  constructor() {

  }

  ngOnInit() {
  }

  startGame() {
    console.log('started');
    this.interval = setInterval(() => {this.incrementAndSendNumber();}, 1000);
  }

  stopGame() {
    console.log('stopped');
    clearInterval(this.interval);
  }

  incrementAndSendNumber() {
    this.sendIncrementedNumber.emit(this.currentNumber);
    console.log(this.currentNumber++);
  }

}
