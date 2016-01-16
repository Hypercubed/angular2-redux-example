
import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {todosReducer as todos} from './todosReducer';
import {filterReducer as currentFilter} from './filterReducer';
import persistState from 'redux-localstorage';
import createLogger from 'redux-logger';

const rootReducer = combineReducers({
  todos,
  currentFilter
});

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
const createPersistentStore = compose(persistState())(createStoreWithMiddleware);

export class AppStore {  // or use https://github.com/jhades/angular2-redux-store
  constructor () {
    return createPersistentStore(rootReducer);
  }
}
