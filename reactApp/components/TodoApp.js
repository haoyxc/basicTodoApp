import React from "react";
import TodoList from "./TodoList";
import InputLine from "./InputLine";
import uuid from "uuid";
import axios from "axios";

debugger;
const dbUrl = "http://localhost:3000/db";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get(dbUrl + "/all")
      .then(response => {
        this.setState({
          todos: response.data
        });
      })
      .catch(function(e) {
        console.log(e);
      });
  }
  toggleCompl(key) {
    axios
      .post(dbUrl + "/toggle", {
        id: key
      })
      .then(response => {
        let copyTodos = [...this.state.todos];
        let index = copyTodos.findIndex(el => el._id === key);
        copyTodos.splice(index, 1, response.data);
        this.setState({
          todos: copyTodos
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  addTodo(task) {
    axios
      .post(dbUrl, {
        task: task
      })
      .then(response => {
        this.setState({ todos: this.state.todos.concat(response.data) });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  removeTodo(key) {
    axios
      .post(dbUrl + "/remove", {
        id: key
      })
      .then(response => {
        this.setState({
          todos: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h3 className="pageTitle">To-Do List</h3>
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
