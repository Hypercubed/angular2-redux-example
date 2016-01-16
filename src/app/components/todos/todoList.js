import {Component, OnDestroy} from 'angular2/core';
import {Todo} from './todo';
import {VisibleTodosPipe} from './visibleTodosPipe';
import {AppStore} from '../../stores/appStore';
import {TodoActions} from '../../stores/todoActions';

@Component({
  selector: 'todo-list',
  template: `
    <div class="main">
      <input class="toggle-all" type="checkbox" (click)="completeAll()">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <todo
          *ngFor="#todo of todos | visibleTodos:currentFilter"
          [completed]="todo.completed"
          [id]="todo.id"
          [text]="todo.text"
        >{{todo.text}}</todo>
      </ul>
    </div>`,
  directives: [Todo],
  pipes: [VisibleTodosPipe]
})
export class TodoList implements OnDestroy {
  constructor (appStore, todoActions) {
    this.appStore = appStore;
    this.todoActions = todoActions;

    this.todos = appStore.getState().todos;

    this.unsubscribe = appStore.subscribe(() => {
      let state = appStore.getState();
      this.currentFilter = state.currentFilter;
      this.todos = state.todos;
    });
  }

  completeAll () {
    this.appStore.dispatch(this.todoActions.completeAll());
  }

  ngOnDestroy () {
    // remove listener
    this.unsubscribe();
  }
}

TodoList.parameters = [AppStore, TodoActions];
