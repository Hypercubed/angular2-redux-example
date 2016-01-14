import {Component, ContentChildren, OnDestroy, OnInit, InjectMetadata} from 'angular2/core';
import {TodoActions} from './todoActions';

@Component({
  selector: 'filter-link',
  inputs: ['filter'],
  template:
    `<button class="btn btn-link" (click)="applyFilter(filter);"
        [ngClass]="{'active': active, 'inactive': !active}">` +
      `<ng-content></ng-content>` +
    `</button>`
})
@Reflect.metadata('parameters', [[new InjectMetadata('AppStore')]])
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
