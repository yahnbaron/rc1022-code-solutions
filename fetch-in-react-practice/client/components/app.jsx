import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }))
      .catch(err => console.error('Fetch failed', err));
  }

  addTodo(newTodo) {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };
    const shallow = this.state.todos.slice();
    fetch('/api/todos', init)
      .then(response => response.json())
      .then(data => this.setState({ todos: shallow.concat(data) }))
      .catch(err => console.error('Fetch failed', err));
  }

  toggleCompleted(todoId) {
    const todoIndex = this.state.todos.findIndex(todo => todo.todoId === todoId);
    const todo = this.state.todos[todoIndex];
    const isCompleted = !todo.isCompleted;

    const updates = { isCompleted };
    const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updates)
    };

    fetch(`/api/todos/${todoId}`, init)
      .then(response => response.json())
      .then(data => {
        const shallow = this.state.todos.slice();
        shallow[todoIndex] = data;
        this.setState({ todos: shallow });
      })
      .catch(err => console.error('Fetch failed', err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
