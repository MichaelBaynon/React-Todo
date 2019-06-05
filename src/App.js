import React from 'react';
import Todos from './components/TodoComponents/Todo'
import './components/TodoComponents/Todo.css'
import AddTodo from './components/TodoComponents/TodoForm';

class App extends React.Component {
  state = {
    todos: [
      // { id: 1, content: 'buy some milk' },
      // { id: 2, content: 'play video games' },

    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='centerRedText'>ToDo's ☑</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
