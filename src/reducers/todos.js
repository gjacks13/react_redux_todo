//Import the Todo API 
import { TodoApi } from "../api/todoApi";
import Todo from './todo';
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

 const Todos = (state =[], action) => {
  switch(action.type) {
    case ADD_TODO: 
      return [
        ...state,
        Todo(undefined, action),
      ]
    case TOGGLE_TODO:
      return state.map(todo => (
        Todo(todo, action)
      ));
    default:
      return state;
  }
}

export default Todos;