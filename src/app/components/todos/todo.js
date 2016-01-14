import {Component, Inject} from 'angular2/core';
import {TodoActions} from './todoActions';
import {AppStore} from './appStore';

@Component({
  selector: 'todo',
  inputs: ['completed', 'id'],
  template: `
    <li (click)="onTodoClick(id)"
      [style.textDecoration]="completed?'line-through':'none'">
      <ng-content></ng-content>
    </li>
  `
})
// @Reflect.metadata('parameters', [[new InjectMetadata('AppStore')]])
export class Todo {
  constructor (appStore) {
    this.appStore = appStore;
    this.todoActions = new TodoActions();
  }

  onTodoClick (id) {
    this.appStore.dispatch(this.todoActions.toggleTodo(id));
  }

  removeTodo (id) {
    this.appStore.dispatch(this.todoActions.removeTodo(id));
  }
}

Inject(AppStore)(Todo, null, 0);
