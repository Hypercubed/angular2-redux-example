import {Component, InjectMetadata} from 'angular2/core';
import {TodoActions} from './todoActions';

@Component({
  selector: 'add-todo',
  template:
    `<div>
      <input #todo>
      <button (click)="addTodo(todo)">Add todo</button>
    </div>`
})
@Reflect.metadata('parameters', [[new InjectMetadata('AppStore')]])
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
