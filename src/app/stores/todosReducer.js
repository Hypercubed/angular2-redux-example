import cuid from 'cuid';

import {ADD_TODO, EDIT_TODO, TOGGLE_TODO, REMOVE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from './todoActions';

const initialState = [];

export function todoReducer (state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        id: cuid(),
        text: action.text,
        completed: action.completed
      };
    case EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        text: action.text
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    case REMOVE_TODO:
      return state.id !== action.id;
    case CLEAR_COMPLETED:
      return state.completed === false;
    default:
      return state;
  }
}

export function todosReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [todoReducer({}, action), ...state];
    case EDIT_TODO:
    case TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action));
    case REMOVE_TODO:
    case CLEAR_COMPLETED:
      return state.filter(todo => todoReducer(todo, action));
    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    default:
      return state;
  }
}

function nextId (state) {
  return state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}
