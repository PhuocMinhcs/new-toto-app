import React, { useState, useReducer, useEffect } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import TodoItem from './components/TodoItem'

import state from './store'
import reducer from './store/reducer'
import {
  addNewTodo,
  deleteTodo,
  changeTodoStatus,
} from './store/actions';
import { TodoStatus } from './constants';

import './App.css';

function App() {
  const [appState, dispatch] = useReducer(reducer, state)
  const [todoList, setToDoList] = useState(appState.todos);
  const [todoName, setTodoName] = useState('');
  const handleInputChange = (value) => {
    setTodoName(value)
  }

  useEffect(() => {
    setToDoList(appState.todos);
  }, [appState.todos])

  const handleKeyPress = (e) => {
    const key = e.keyCode || e.which;
    const name = todoName.trim()
    if (key === 13 && name) {
      dispatch(addNewTodo({
        name: todoName,
        status: TodoStatus.ACTIVE,
      }));
      setTodoName('')
      e.target.value = '';
    }
  }

  const handleDelete = (e, index) => {
    e.stopPropagation()
    dispatch(deleteTodo(index));
  }

  const changeStatus = (index, status) => {
    dispatch(changeTodoStatus(index,status))
  }

  const filterByStatus = (status) => {
    if (status === 'all') return setToDoList(appState.todos);
    const newTodo = appState.todos.filter(item => item.status === status);
    setToDoList(newTodo);
  }
  return (
    <div className="App">
      <div className="todo-app--wrapper">
        <div className="todo-app--title">
          <h3>Todo App</h3>
        </div>
        <div className="todo-app--content">
          <div className="input-todo">
            <Input
              placeholder="Enter Todo Name"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className={`todo-list${todoList.length > 5 ? ' scroll-enabled' : ''}`}>
            {
              todoList.map((item, index) => <TodoItem
                item={item}
                key={index}
                onItemClick={(data) => changeStatus(index, data.status === TodoStatus.DONE ? TodoStatus.ACTIVE : TodoStatus.DONE)}
                onDelete={(e) => handleDelete(e, index)}
              />)
            }
          </div>
        </div>

        <div className="toto-app--actions">
            <div className="toggle-all">
              <Button color="green">Toggle all</Button>
            </div>
            <div className="rest-off-actions">
              <Button onClick={() => filterByStatus('all')} color="blue">All</Button>
              <Button onClick={() => filterByStatus(TodoStatus.ACTIVE)}>Active</Button>
              <Button onClick={() => filterByStatus(TodoStatus.DONE)}>Done</Button>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
