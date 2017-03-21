import {Component, OnInit} from '@angular/core';
import {ITodo} from '../shared/model/itodo';
import {TodoStatus} from '../shared/constants';
import {Filter} from '../shared/constants';
import {TodosService} from '../shared/model/todos.service';
import {TodosAsyncService} from "../shared/model/todosAsync.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  currentFilter: number;

  todos: ITodo[] = [];

  constructor(
    private todosService: TodosService,
    private todosAsyncService: TodosAsyncService) {
  }

  ngOnInit() {
    this.setCurrentFilter(Filter.ALL);
    // this.todos = this.todosService.getTodos();
    // console.log(JSON.stringify(this.todos));

    this.updateTodos();
  }

  changeTodoStatus(todo: ITodo) {
    // this.todosService.changeTodoStatus(todo);
    // this.updateTodos();

    // this.todosAsyncService.changeTodoStatus(todo)
    //   .subscribe(({status}) => {
    //     todo.status = status;
    //   });
  }

  deleteTodo(todo: ITodo) {
    // this.todosService.deleteTodo(todo);
    // this.updateTodos();
    this.todosAsyncService.deleteTodo(todo)
      .subscribe((result) => {
        this.updateTodos();
      });
  }

  addTodo(name: string) {
    // this.todosService.addTodo(name);
    this.todosAsyncService.addTodo(name).subscribe((result) => {
      console.log('--- result', result);
    });
    this.updateTodos();
  }

  setCurrentFilter(filter: number) {
    this.currentFilter = filter;
  }

  checkTodo(item: ITodo): boolean {
    switch (this.currentFilter) {
      case (Filter.ALL):
        return true;
      case (Filter.COMPLETED):
        return item.status === TodoStatus.DONE;
      case (Filter.LEFT):
        return item.status === TodoStatus.TODO;
    }
    return false;
  }

  private updateTodos() {
    // this.todos = this.todosService.getTodos();
    this.todosAsyncService.getTodos()
      .subscribe((todos: ITodo[]) => {
        this.todos = todos;
        console.log(this.todos);
      });

  }
}
