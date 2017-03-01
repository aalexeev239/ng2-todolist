import { Component, OnInit, Input } from '@angular/core';
import {ITodoItem} from '../shared/model/todo-item';
import {TodoStatus} from '../shared/constants';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() item: ITodoItem;

  constructor() { }

  ngOnInit() {
  }

  get isDone() {
    return this.item.status === TodoStatus.DONE;
  }
}
