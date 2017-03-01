import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ITodoItem} from '../shared/model/todo-item';
import {TodoStatus} from '../shared/constants';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() item: ITodoItem;
  @Output() change: EventEmitter<ITodoItem> = new EventEmitter();
  @Output() delete: EventEmitter<ITodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get isDone() {
    return this.item.status === TodoStatus.DONE;
  }

  changeStatus() {
    this.change.emit(this.item);
  }

  deleteTodo() {
    this.delete.emit(this.item);
  }
}
