import React from 'react';
import './Todo.css';

const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li
    className={
      'todo-item ' +
      (completed ? 'completed' : '')
    }
    onClick={onClick}
  >
    {text}
  </li>
);

export default Todo;
