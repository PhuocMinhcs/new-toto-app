import styled from 'styled-components'
import Button from '../Button'
import { TodoStatus } from '../../constants';

const TodoItemWrapper = styled.div.attrs(props => ({
  className: `toto-item${props.status === TodoStatus.DONE ? ' done' : ' active'}`
}))`
  text-align: left;
  padding: 5px 10px;
  position: relative;
  border-bottom: 1px solid #dadada;
  &.done {
    text-decoration: line-through;
    color: #ff6262;
  }
  button {
    position: absolute;
    top: 3px;
    right: 0;
    margin: 0;
  }
`;

const TodoItem = (props) =>{
  const {
    item,
    onDelete,
    onItemClick,
  } = props;

  const handleItemClick = (item) => {
    if (onItemClick && typeof onItemClick === 'function') {
      onItemClick(item)
    }
  }

  const handleDeleteItem = (e) => {
    if (onDelete && typeof onDelete === 'function') {
      onDelete(e)
    }
  }
  return <TodoItemWrapper onClick={() => handleItemClick(item)} status={item.status}>
    {item.name}
    <Button onClick={handleDeleteItem}>x</Button>
  </TodoItemWrapper>
};

export default TodoItem
