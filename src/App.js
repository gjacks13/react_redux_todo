import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
});

class App extends Component {
  render() {
    return (
      <Provider store={createStore(todoApp)}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div >
      </Provider>
    );
  }
}

export default App;
