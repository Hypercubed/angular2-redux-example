// our root app component
import {Component} from 'angular2/core';
import {AddTodo} from './addTodo';
import {TodoList} from './todoList';
import {Filters} from './filters';
import {AppStore} from '../../stores/appStore';
import {TodoActions} from '../../stores/todoActions';

import 'todomvc-app-css/index.css!';
import './style.css!';

@Component({
  selector: 'root',
  template:
    `<div class="todoapp">
      <add-todo></add-todo>
      <todo-list></todo-list>
      <filters></filters>
    </div>`,
  directives: [AddTodo, TodoList, Filters],
  providers: [AppStore, TodoActions]
})
export class TodosComponent { }
