import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() value: number;
  @Output() change: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.value = 0;
  }

  increaseValue() {
    this.value++;
    this.change.emit(this.value);
  }

  decreaseValue() {
    this.value = Math.max(0, this.value - 1);
    this.change.emit(this.value);
  }
}
