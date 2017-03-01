import { Component, OnInit } from '@angular/core';
import {ITodo} from '../shared/model/itodo';
import {TodoStatus} from '../shared/constants';



@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  idCounter: number;

  todos: ITodo[] = [
    {
      id: 1,
      name: 'Позвонить в сервис',
      status: TodoStatus.TODO
    },
    {
      id: 2,
      name: 'Купить хлеб',
      status: TodoStatus.TODO
    },
    {
      id: 3,
      name: 'Захватить мир',
      status: TodoStatus.DONE
    },
    {
      id: 4,
      name: 'Добавить тудушку в список',
      status: TodoStatus.TODO
    }
  ];

  constructor() { }

  ngOnInit() {
    this.idCounter = this.todos.length;
  }

  changeTodoStatus(todo: ITodo) {
    const status = todo.status === TodoStatus.TODO ? TodoStatus.DONE : TodoStatus.TODO;

    this.todos = this.todos.map(
      item => item.id === todo.id ? Object.assign({}, item, {status}) : item
    );
  }

  deleteTodo(todo: ITodo) {
    this.todos = this.todos.filter(
      item => item.id !== todo.id
    );
  }

  addTodo(name: string) {
    if (this.todos.some(item => item.name === name)) {
      return;
    }

    this.idCounter++;
    this.todos.push({
      id: this.idCounter,
      name: name,
      status: TodoStatus.TODO
    })
  }
}
