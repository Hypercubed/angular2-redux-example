import {Component} from 'angular2/core';
import {TodoActions} from '../../stores/todoActions';
import {AppStore} from '../../stores/appStore';

@Component({
  selector: 'add-todo',
  template:
    `<div class="header">
      <h1>todos</h1>
      <input #todo (keyup.enter)="addTodo(todo)" class="new-todo" placeholder="What needs to be done?" autofocus>
    </div>`
})
export class AddTodo {
  constructor (appStore, todoActions) {
    this.appStore = appStore;
    this.todoActions = todoActions;
  }

  addTodo (input) {
    const text = input.value.trim();
    if (text.length !== 0) {
      this.appStore.dispatch(this.todoActions.addTodo(input.value));
      input.value = '';
    }
  }
}

AddTodo.parameters = [AppStore, TodoActions];
