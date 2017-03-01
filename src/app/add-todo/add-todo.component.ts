import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  label: string;

  @Output() add: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (!this.label) return;
    this.add.emit(this.label);
    this.label = '';
  }
}
