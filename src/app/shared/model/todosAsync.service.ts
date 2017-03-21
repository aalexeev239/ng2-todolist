import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {ITodo} from './itodo';
import {TodoStatus} from '../constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


const BASE_URL = 'https://todolist-18649.firebaseio.com';

@Injectable()
export class TodosAsyncService {

  constructor(private http: Http) {

  }

  getTodos() {
    return this.http.get(`${BASE_URL}/todos.json`)
      .map(result => result.json());
  }

  addTodo(name: string) {
    return this.http.post(`${BASE_URL}/todos.json`, {
      name: name,
      status: TodoStatus.TODO
    });
  }

  deleteTodo(todo: ITodo) {
    return this.http.delete(`${BASE_URL}/todos/${todo.id}.json`);
  }

  changeTodoStatus(todo: ITodo) {
    return this.http.patch(`${BASE_URL}/todos/${todo.id}.json`, {
      status: (todo.status === TodoStatus.TODO ? TodoStatus.DONE : TodoStatus.TODO)
    })
      .map(result => result.json())
      .map(todos => {
        const result = [];
        for (let key of Object.keys(todos)) {
          result.push(Object.assign({}, todos[key], {id: key}))
        }
        return result;
      });
  }

}
