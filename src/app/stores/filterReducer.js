import * as TodoActions from './todoActions';

const initialState = 'SHOW_ALL';

export function filterReducer (state = initialState, action) {
  switch (action.type) {
    case TodoActions.SET_CURRENT_FILTER:
      return action.filter;
    case TodoActions.ADD_TODO:
      return state;
    default:
      return state;
  }
}
