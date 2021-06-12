import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_TOTO_STATUS,
} from './actions';

const reducer = (state ,action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = [...state.todos, action.payload.todo];
      return {
        ...state,
        todos: newTodo,
      };
    }
    case DELETE_TODO: {
      const newTodo = [
        ...state.todos.slice(0, action.payload.todoId),
        ...state.todos.slice(action.payload.todoId + 1),
      ];
      return {
        ...state,
        todos: newTodo,
      };
    }
    case CHANGE_TOTO_STATUS: {
      const newTodo = [
        ...state.todos.slice(0, action.payload.todoId),
        {
          ...state.todos[action.payload.todoId],
          status: action.payload.status
        },
        ...state.todos.slice(action.payload.todoId + 1),
      ];
      return {
        ...state,
        todos: newTodo
      };
    }
    default:
      return state;
  }
}

export default reducer;
