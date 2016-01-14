import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import './main.css!';
import template from './main.html!text';

import {AboutComponent} from './components/about/about';
import {TodosComponent} from './components/todos/app';

@Component({
  selector: 'my-app',
  template,
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/about', name: 'About', component: AboutComponent},
  {path: '/', name: 'Todos', component: TodosComponent, useAsDefault: true}
])
export class AppComponent {}
