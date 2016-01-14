import {Component, ContentChildren, InjectMetadata} from 'angular2/core';
import {TodoActions} from './todoActions';

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
@Reflect.metadata('parameters', [[new InjectMetadata('AppStore')]])
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
