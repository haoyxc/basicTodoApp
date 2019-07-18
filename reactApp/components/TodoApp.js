import React from "react";
import TodoList from "./TodoList";

let dummyData = [
  { taskText: "cry", completed: false },
  { taskText: "eat", completed: false },
  { taskText: "sleep", completed: false }
];

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }
  render() {
    return <TodoList todos={this.state.todos} />;
  }
}
