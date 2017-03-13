import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {TodolistComponent} from './todolist/todolist.component';
import {TodoitemComponent} from './todoitem/todoitem.component';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {StatsComponent} from './stats/stats.component';
import {FiltersComponent} from './filters/filters.component';
import {TodosService} from "./shared/model/todos.service";

import {AngularFireModule} from 'angularfire2/index';
import {firebaseConfig} from '../environments/firebase.config';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodolistComponent,
    TodoitemComponent,
    AddTodoComponent,
    StatsComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
