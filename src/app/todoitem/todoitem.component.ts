import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ITodo} from '../shared/model/itodo';
import {TodoStatus} from '../shared/constants';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() item: ITodo;
  @Output() change: EventEmitter<ITodo> = new EventEmitter();
  @Output() delete: EventEmitter<ITodo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isDone() {
    return this.item.status === TodoStatus.DONE;
  }

  changeStatus() {
    this.change.emit(this.item);
  }

  deleteTodo() {
    this.delete.emit(this.item);
  }
}
