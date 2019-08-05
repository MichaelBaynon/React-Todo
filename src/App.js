import React from "react";

import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

import TodoForm from "./components/TodoComponents/TodoForm";

const todosData = [
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,

            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = todoName => {
    const newItem = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  render() {
    return (
      <div className="todoComponent">
        <h2>Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
