import { Component, OnInit } from '@angular/core';
import {ITodoItem} from '../shared/model/todo-item';
import {TodoStatus} from '../shared/constants';



@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoItems: ITodoItem[] = [
    {
      name: 'Позвонить в сервис',
      status: TodoStatus.TODO
    },
    {
      name: 'Купить хлеб',
      status: TodoStatus.TODO
    },
    {
      name: 'Захватить мир',
      status: TodoStatus.DONE
    },
    {
      name: 'Добавить тудушку в список',
      status: TodoStatus.TODO
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
