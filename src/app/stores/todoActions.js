export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export class TodoActions {
  constructor () {
  }

  addTodo (text) {
    return {
      type: ADD_TODO,
      text: text,
      completed: false
    };
  }

  editTodo (id, text) {
    return {
      type: EDIT_TODO,
      id: id,
      text: text
    };
  }

  toggleTodo (id) {
    return {
      type: TOGGLE_TODO,
      id: id
    };
  }

  removeTodo (id) {
    return {
      type: REMOVE_TODO,
      id: id
    };
  }

  setCurrentFilter (filter) {
    return {
      type: SET_CURRENT_FILTER,
      filter: filter
    };
  }

  completeAll () {
    return {
      type: COMPLETE_ALL
    };
  }

  clearCompleted () {
    return {
      type: CLEAR_COMPLETED
    };
  }
}
