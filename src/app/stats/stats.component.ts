import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from "../shared/model/itodo";
import {TodoStatus} from "../shared/constants";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() todos: ITodo[];

  constructor() { }

  ngOnInit() {
  }

  getDoneLength() {
    return this.todos.filter(item => item.status === TodoStatus.DONE).length;
  }

  getTodoLength() {
    return this.todos.filter(item => item.status === TodoStatus.TODO).length;
  }
}
