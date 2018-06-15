import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './AddTodo.css';

let input;
let AddTodo = ({ dispatch }) => (
  <div className="add-todo-panel">
    <input ref={node => {
      input = node;
    }} />
    <button
      className='add-todo-btn'
      onClick={(e) => {
        if (input.value) {
          dispatch(addTodo(input.value));
          input.value = '';
        }
        e.target.blur();
      }}>
      Add Todo
    </button>
  </div>
);

AddTodo = connect()(AddTodo);


export default AddTodo;
