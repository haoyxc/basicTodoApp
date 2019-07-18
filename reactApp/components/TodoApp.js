import React from "react";
import TodoList from "./TodoList";
import InputLine from "./InputLine";
import uuid from "uuid";

let dummyData = [
  { id: 1, taskText: "cry", completed: false },
  { id: 2, taskText: "eat", completed: false },
  { id: 3, taskText: "sleep", completed: false }
];

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  toggleCompl(key) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === key) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  addTodo(task) {
    let newId = uuid.v4();
    let newTodo = {
      id: newId,
      taskText: task,
      completed: false
    };
    console.log(newTodo);
    dummyData.push(newTodo);
    this.setState({
      todos: dummyData
    });
  }
  removeTodo(key) {
    console.log(this.state, key);
    dummyData = [...this.state.todos.filter(todo => todo.id !== key)];
    this.setState({
      todos: dummyData
    });

    console.log([...this.state.todos.filter(todo => todo.id !== key)]);
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }
  render() {
    return (
      <div className="container">
        <InputLine submit={task => this.addTodo(task)} />
        <TodoList
          todos={this.state.todos}
          todoXClick={this.removeTodo.bind(this)}
          toggleCompl={this.toggleCompl.bind(this)}
        />
      </div>
    );
  }
}
