import {Component, Inject} from 'angular2/core';
import {TodoActions} from './todoActions';
import {AppStore} from './appStore';

@Component({
  selector: 'add-todo',
  template:
    `<div>
      <input #todo>
      <button (click)="addTodo(todo)">Add todo</button>
    </div>`
})
export class AddTodo {
  todoActions = new TodoActions();

  constructor (appStore) {
    this.appStore = appStore;
  }

  addTodo (input) {
    this.appStore.dispatch(this.todoActions.addTodo(input.value));
    input.value = '';
  }
}

Inject(AppStore)(AddTodo, null, 0);
