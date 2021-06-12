export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TOTO_STATUS = 'CHANGE_TOTO_STATUS';


export const addNewTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: {
      todoId,
    },
  };
};

export const changeTodoStatus = (todoId, status) => {
  return {
    type: CHANGE_TOTO_STATUS,
    payload: {
      todoId,
      status,
    },
  };
};
