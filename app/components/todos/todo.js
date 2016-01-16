import {Component} from 'angular2/core';
import {TodoActions} from '../../stores/todoActions';
import {AppStore} from '../../stores/appStore';

@Component({
  selector: 'todo',
  inputs: ['completed', 'id', 'text'],
  template: `
    <li
      [class]="completed?'completed':''"
      [style.textDecoration]="completed?'line-through':'none'">
      <div class="view" *ngIf="!editing">
        <input class="toggle" type="checkbox" (click)="onTodoClick(id)" [checked]="completed">
        <label (dblclick)="editing = true"><ng-content></ng-content></label>
        <button class="destroy" (click)="removeTodo(id)"></button>
      </div>
      <input class="edit" #editedtodo
        [style.display]="editing?'block':'none'"
        [value]="text"
        (blur)="stopEditing(id, editedtodo.value)"
        (keyup.enter)="stopEditing(todo, editedtodo.value)"
        (keyup.escape)="cancelEditingTodo(editedtodo)">
    </li>`
})
export class Todo {
  constructor (appStore, todoActions) {
    this.appStore = appStore;
    this.todoActions = todoActions;
    this.editing = false;
  }

  onTodoClick (id) {
    this.appStore.dispatch(this.todoActions.toggleTodo(id));
  }

  removeTodo (id) {
    this.appStore.dispatch(this.todoActions.removeTodo(id));
  }

  stopEditing (id, text) {
    this.editing = false;
    text = text.trim();
    if (text.length === 0) {
      return this.appStore.dispatch(this.todoActions.removeTodo(id));
    }
    this.appStore.dispatch(this.todoActions.editTodo(id, text));
  }

  cancelEditingTodo (editedtodo) {
    editedtodo.value = this.text;
    this.editing = false;
  }
}

Todo.parameters = [AppStore, TodoActions];
