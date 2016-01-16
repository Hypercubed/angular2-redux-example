import {Component, OnDestroy, OnInit} from 'angular2/core';
import {TodoActions} from '../../stores/todoActions';
import {AppStore} from '../../stores/appStore';

@Component({
  selector: 'filter-link',
  inputs: ['filter'],
  template:
    `<li>
      <a href="#/" (click)="applyFilter(filter);"
          [ngClass]="{'selected': active, 'inactive': !active}">
        <ng-content></ng-content>
      </a>
    </li>`
})
export class FilterLink implements OnInit, OnDestroy {
  constructor (appStore) {
    this.appStore = appStore;
    this.todoActions = new TodoActions();
    this.unsubscribe = appStore
      .subscribe(() => this.updateActive());
  }

  ngOnInit () {
    // set initial state
    this.updateActive();
  }

  ngOnDestroy () {
    // remove change listener
    this.unsubscribe();
  }

  // Helper methods
  applyFilter (filter) {
    this.appStore.dispatch(this.todoActions.setCurrentFilter(filter));
  }

  updateActive () {
    this.active = (this.filter === this.appStore.getState().currentFilter);
  }
}

FilterLink.parameters = [AppStore];
