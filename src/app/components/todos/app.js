// our root app component
import {Component} from 'angular2/core';
import {AddTodo} from './addTodo';
import {TodoList} from './todoList';
import {Filters} from './filters';
import {AppStore} from './appStore';

import './style.css!';

@Component({
  selector: 'root',
  template:
    `<div>
      <filters></filters>
      <add-todo></add-todo>
      <todo-list></todo-list>
    </div>`,
  directives: [AddTodo, TodoList, Filters],
  providers: [AppStore]
})
export class TodosComponent { }
