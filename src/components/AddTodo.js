import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let input;
let AddTodo = ({ dispatch }) => (
  <div>
    <input ref={node => {
      input = node;
    }} />
    <button
      onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
      Add todo
    </button>
  </div>
);

AddTodo = connect()(AddTodo);


export default AddTodo;
