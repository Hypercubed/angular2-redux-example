// our root app component
import {Component, provide} from 'angular2/core';
import {AddTodo} from './addTodo';
import {TodoList} from './todoList';
import {Filters} from './filters';

import {createStore} from 'redux';
import {rootReducer} from './rootReducer';

const appStore = createStore(rootReducer);

@Component({
  selector: 'root',
  template:
    `<div>
      <add-todo></add-todo>
      <todo-list></todo-list>
      <filters></filters>
    </div>`,
  directives: [AddTodo, TodoList, Filters],
  providers: [
    provide('AppStore', {useValue: appStore})
  ]
})
export class TodosComponent { }
