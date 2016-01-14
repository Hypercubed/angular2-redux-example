import {Component, OnDestroy, OnInit, Inject} from 'angular2/core';
import {TodoActions} from './todoActions';
import {AppStore} from './appStore';

@Component({
  selector: 'filter-link',
  inputs: ['filter'],
  template:
    `<button class="btn btn-default btn-sm" (click)="applyFilter(filter);"
        [ngClass]="{'active': active, 'inactive': !active}">` +
      `<ng-content></ng-content>` +
    `</button>`
})
export class FilterLink implements OnInit, OnDestroy {
  constructor (appStore) {
    this.appStore = appStore;
    this.todoActions = new TodoActions();
    this.unsubscribe = this.appStore
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

Inject(AppStore)(FilterLink, null, 0);
