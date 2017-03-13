import { Injectable } from '@angular/core';
import {ITodo} from './itodo';
import {TodoStatus} from '../constants';
import {AngularFire} from 'angularfire2';


@Injectable()
export class TodosService {

  private idCounter: number;
  private todos: ITodo[] = [
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

  constructor(private af: AngularFire) {
    this.idCounter = this.todos.length;
  }

  getTodos() {
    return this.todos;
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
    });
  }

  deleteTodo(todo: ITodo) {
    this.todos = this.todos.filter(
      item => item.id !== todo.id
    );
  }

  changeTodoStatus(todo: ITodo) {
    const status = todo.status === TodoStatus.TODO ? TodoStatus.DONE : TodoStatus.TODO;

    this.todos = this.todos.map(
      item => item.id === todo.id ? Object.assign({}, item, {status}) : item
    );
  }
}
