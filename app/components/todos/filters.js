import {Component, OnDestroy} from 'angular2/core';
import {FilterLink} from './filterLink';
import {AppStore} from '../../stores/appStore';
import {TodoActions} from '../../stores/todoActions';
import {VisibleTodosPipe} from './visibleTodosPipe';

@Component({
  selector: 'filters',
  template: `
    <div class="footer">
      <span class="todo-count"><strong>{{(todos | visibleTodos:'SHOW_ACTIVE').length}}</strong> item left</span>
      <ul class="filters">
        <filter-link filter="SHOW_ALL">All</filter-link>
        <filter-link filter="SHOW_ACTIVE">Active</filter-link>
        <filter-link filter="SHOW_COMPLETED">Completed</filter-link>
      </ul>
      <button class="clear-completed" (click)="clearCompleted()">Clear completed</button>
    </div>`,
  directives: [FilterLink],
  pipes: [VisibleTodosPipe]
})
export class Filters implements OnDestroy {
  constructor (appStore, todoActions) {
    this.appStore = appStore;
    this.todoActions = todoActions;

    this.todos = appStore.getState().todos;

    this.unsubscribe = appStore.subscribe(() => {
      this.todos = appStore.getState().todos;
    });
  }

  clearCompleted () {
    this.appStore.dispatch(this.todoActions.clearCompleted());
  }

  ngOnDestroy () {
    // remove listener
    this.unsubscribe();
  }
}

Filters.parameters = [AppStore, TodoActions];
