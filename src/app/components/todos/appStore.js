
import {createStore} from 'redux';
import {rootReducer} from './rootReducer';

export class AppStore {
  constructor () {
    return createStore(rootReducer);
  }
}
